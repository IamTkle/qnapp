from flask.helpers import make_response
from flaskapp.forms import LoginForm
from flaskapp import flaskapp, models, db
from flask import render_template,flash, redirect, url_for, jsonify, request, session
from random import randint
from sqlalchemy import func
import re

# @flaskapp.route('/login', methods=['GET', 'POST'])
# def login():
#     my_form = LoginForm()

#     if my_form.validate_on_submit():
#         flash('Login request received for user {}, remember_me={}'.format(my_form.username.data, my_form.remember_me.data) )
#         return redirect(url_for('extended'))
#     return render_template('login.html', username="Mom",form=my_form)

@flaskapp.route('/')
def redirect_to_qnapp():
    return redirect(url_for('serve_static_react'))

@flaskapp.route('/qnapp')
def serve_static_react():
    if 'qnappTkn' not in session:
        session['qnappTkn'] = randint(10000, 100000)   
        while db.session.query(models.User).get(session['qnappTkn']) is not None:
            session['qnappTks'] = randint(10000, 100000)

    # elif 'username' in session:
    #     curr_user = db.session.query(models.User).get(session['qnappTkn'])

    #     if not curr_user: #database reset
    #         db.session.add(models.User(qnapp_id=session['qnappTkn'],username=session['username'], actions_counter=0))
    #         db.session.commit()
    #         curr_user = db.session.query(models.User).get(session['qnappTkn'])

    #     next_prompt = generate_prompt(curr_user)

    #     return render_template('index.html', username=session['username'], \
    #         promptType=next_prompt["promptType"], prompt=next_prompt["prompt"],\
    #         qid=next_prompt['qid'] if 'qid' in next_prompt else "",\
    #         sensitive=next_prompt['sensitive'] if next_prompt['sensitive'] is True else "")

    return flaskapp.send_static_file('index.html')
    # return render_template('index.html', promptType="q", prompt="It's your turn to ask a question", sensitive="")


@flaskapp.route('/api/name', methods=['POST', 'GET'])
def set_username():
    if request.method == 'POST':
        if 'qnappTkn' in session:
            inc_req = request.json
            chosenUsername = str(inc_req['username'])

            if not re.search(r"[\\p{P}\\p{S}]", chosenUsername, re.UNICODE):
                # resp = make_response('')
                # resp.status_code = 200
                # resp.set_cookie("username", chosenUsername, samesite="strict")
                session['username'] = chosenUsername

                db.session.add(models.User(qnapp_id=session['qnappTkn'],username=session['username'], actions_counter=0))
                db.session.commit()

                print(f"saved to database {session['qnappTkn']}")
                return ('', 200)
            else:
                return ({'error': 'Invalid input, no special characters allowed'}, 400)
        else:
            return {'error': 'Invalid user token'}, 403
    else: #Must be GET
        if 'qnappTkn' in session and 'username' in session:
            return {'username': session['username']}, 200
        else:
            return {'username': False}, 200

@flaskapp.route('/api/initialprompt', methods=['GET'])
def generate_initial_prompt():
    if 'qnappTkn' in session and 'username' in session:
        curr_user = db.session.query(models.User).get(session['qnappTkn'])

        if not curr_user: #database reset
            db.session.add(models.User(qnapp_id=session['qnappTkn'],username=session['username'], actions_counter=0))
            db.session.commit()
            curr_user = db.session.query(models.User).get(session['qnappTkn'])

        next_prompt = generate_prompt(curr_user)

        return next_prompt, 200
    else:
        return 'Invalid user', 403

@flaskapp.route('/api/questions', methods=['POST'])
def handle_question():

    if('qnappTkn' in session):
        inc_req = request.json
        # if re.search(r"[\\p{P}\\p{S}]", inc_req['user_response'], re.UNICODE):
        if "<" and ">" not in inc_req['user_response'] and len(inc_req['user_response']) > 1:
            #Need to implement database logic
            
            curr_user = db.session.query(models.User).get(session['qnappTkn'])
    
            if curr_user is not None:
                if curr_user.actions_counter % 4 == 0: #it is a question
                    db.session.add(models.Question(author=curr_user,content=inc_req['user_response'], likes=0, dislikes=0, reports=0))
                else: #it is an answer
                    question_id = inc_req['qid']
                    question = db.session.query(models.Question).get(int(question_id))

                    if question_id is not None and question is not None:
                        if inc_req['reported']:
                            question.reports += 1
                        
                        if inc_req['rated']:
                            if inc_req['liked']:
                                question.likes += 1
                            else:
                                question.dislikes += 1

                        db.session.add(models.Answer(question=question, content=inc_req['user_response']))
                    else:
                        return {'error': 'Could not find question that you answered for'} 

                curr_user.actions_counter += 1
                db.session.commit()
            else:
                return {'error': 'User not found in database'}, 403

            return generate_prompt(curr_user), 200

        else:
            return {'error': 'Invalid input'}, 400
           
    else:
        return {'error': 'Invalid user'}, 403

def generate_prompt(curr_user)->dict:

    if curr_user.actions_counter % 4 == 0: #send back question prompt
        return {'prompt': "It's your turn to ask a question", 'promptType' : 'q', 'sensitive': False}
    else:
        maxLikes = db.session.query(func.max(models.Question.likes)).scalar()

        chosen_question = None

        for i in range(5):
            if maxLikes is not None:
                chosen_question = db.session.query(models.Question).filter(models.Question.likes >= randint(0, maxLikes * 3))\
                    .filter(models.Question.dislikes <= randint(0, int(maxLikes / 2))).first()

            if not chosen_question:
                print( f"count: {db.session.query(models.Question).count() }")
                chosen_question = db.session.query(models.Question).get(randint(1, db.session.query(models.Question).count() ))
            
            if chosen_question and chosen_question.author is not curr_user:
                i = 5


        if chosen_question.likes > 0: 
            sensitive = float(chosen_question.reports) / chosen_question.likes >= 0.5
        else:
            sensitive = chosen_question.reports > 0 

        return {'prompt': chosen_question.content, 'qid': chosen_question.id, \
            'promptType': 'a', 'sensitive': sensitive}

@flaskapp.route('/api/answers', methods=['GET'])
def handle_answers():
    if 'qnappTkn' in session:
        curr_user = db.session.query(models.User).get(int(session['qnappTkn']))

        questions = db.session.query(models.Answer, models.Question).\
            outerjoin(models.Question).\
            filter(models.Question.author == curr_user).all()
        
        
        questions = db.session.query(models.Question).filter(models.Question.author == curr_user).outerjoin(models.Answer).all()

        print(db.session.query(models.Answer, models.Question).join(models.Question).filter(models.Question.author == curr_user).all())
        respQuestions = {}

        for question in questions:
            print(question)
            answers = db.session.query(models.Answer).filter(models.Answer.question == question).all()

            data = {}
            data['content'] =  question.content
            data['likes']=  question.likes
            data['dislikes'] = question.dislikes

            answerList = []
            for answer in answers:
                answerList.append(answer.content)
            
            data['answers']= answerList

            respQuestions[question.id] = data
        
        return respQuestions, 200
    else:
        return {'error': 'Invalid user'}, 403