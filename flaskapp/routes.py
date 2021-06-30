from flaskapp.forms import LoginForm
from flaskapp import flaskapp
from flask import render_template,flash, redirect, url_for 

@flaskapp.route('/')
@flaskapp.route('/index')
def index():
    return render_template('index.html', username="Joe", posts=[{'author': 'Ben', 'text': 'Dover here', 'likes': 69}] ) 

@flaskapp.route('/extended')
def extended():
    return render_template('extended.html', username="Joe Mama", posts=[{'author': 'Sugma Balls'}])

@flaskapp.route('/login', methods=['GET', 'POST'])
def login():
    my_form = LoginForm()

    if my_form.validate_on_submit():
        flash('Login request received for user {}, remember_me={}'.format(my_form.username.data, my_form.remember_me.data) )
        return redirect(url_for('extended'))
    return render_template('login.html', username="Mom",form=my_form)
