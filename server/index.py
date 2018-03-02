from flask import Flask
app = Flask(__name__)

from utils import *
from pathlib import Path


@app.route("/post/<path:book>")
def hello(book):
    return Path(book)

    return type(str(book, encoding="utf8"))
    return Path(str(book))
    #return str(readFile(os.path.abspath(book)))
