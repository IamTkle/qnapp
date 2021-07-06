from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

flaskapp = Flask(__name__, template_folder='static')
flaskapp.config.from_object(Config)

db = SQLAlchemy(flaskapp)
migrate = Migrate(flaskapp, db)

from flaskapp import routes, models