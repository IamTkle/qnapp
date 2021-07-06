from flaskapp import flaskapp, db
from flaskapp.models import User, Question, Answer

@flaskapp.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Question': Question, 'Answer': Answer }