from flask import Flask
app = Flask(__name__)

from utils import *


@app.route("/post/<path:book>")
def hello(book):
    return str(readFile("/" + book))
