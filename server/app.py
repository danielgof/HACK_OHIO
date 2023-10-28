from flask import Flask
import os
import logging
from datetime import date

app = Flask(__name__)

# @app.route("/", methods=["GET"])
# def index() -> dict:
#     return {"status":"good morning"}
if not os.path.isdir("./log"):
    os.mkdir("./log")
logging.basicConfig(
    filename=f"./log/{date.today()}.log",
    level=logging.DEBUG,
    format="%(asctime)-15s %(name)-5s %(levelname)-8s %(message)s",
)

remove_color_filter = RemoveColorFilter()
logging.getLogger("werkzeug").addFilter(remove_color_filter)

app.register_blueprint(auth)
app.register_blueprint(offer)
app.register_blueprint(chat)

if __name__ == "__main__":
    app.run(debug=True, port=5000)