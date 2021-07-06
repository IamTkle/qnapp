from flaskapp import db
from datetime import datetime

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(64), index=True, unique=True)
#     email = db.Column(db.String(120), index=True, unique=True)
#     password_hash = db.Column(db.String(128)) 
#     posts = db.relationship('Post', backref='author', lazy='dynamic')
    
#     def __repr__(self):
#         return '<User {}>'.format(self.username)

# class Post(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     body = db.Column(db.String(140))
#     timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

#     def __repr__(self):
#         return '<Post {}>'.format(self.body)
        
class User(db.Model):
    qnapp_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20))
    email = db.Column(db.String(100), unique=True)
    password_hash = db.Column(db.String(128))
    actions_counter = db.Column(db.Integer)
    questions = db.relationship('Question', backref='author', lazy='dynamic')

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    asker = db.Column(db.Integer, db.ForeignKey('user.qnapp_id'))
    likes = db.Column(db.Integer)
    dislikes = db.Column(db.Integer)
    reports = db.Column(db.Integer)
    content = db.Column(db.String(60))
    answers = db.relationship('Answer', backref='question', lazy='dynamic')
    

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ans_for = db.Column(db.Integer, db.ForeignKey('question.id'))
    content = db.Column(db.String(60))