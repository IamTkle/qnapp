from flask import Flask
from config import Config

flaskapp = Flask(__name__)
flaskapp.config.from_object(Config)

from flaskapp import routes