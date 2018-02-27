from flask import Flask
app = Flask(__name__)

from utils import *
import os

@app.route("/post/<path:book>")
def hello(book):
    return str(readFile(os.path.abspath(book)))
