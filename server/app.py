from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import os
from datetime import date
from api.building_api import building
from api.room_api import room
from api.image_upload_api import images
import room_image_search
import upload_to_imgur


app = Flask(__name__)
app.register_blueprint(building)
app.register_blueprint(room)
app.register_blueprint(images)
CORS(app)

if not os.path.isdir("./log"):
    os.mkdir("./log")
logging.basicConfig(filename=f'./log/{date.today()}.log', level=logging.DEBUG)

if __name__ == "__main__":
    app.run(port = 5000, debug = True)