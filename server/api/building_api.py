from flask import Blueprint, request, jsonify, abort, Response
from flask_cors import CORS
from datetime import date
from datetime import datetime, timedelta
from flask import current_app
from create import *
from models.people import *


building = Blueprint("building", __name__, url_prefix="/api/v1/building")

@building.route("/", methods=["GET"])
def index():
    session.add(Building(building_name="Ohio Union", lat=35, lng=35))
    session.commit()
    session.close()
    return {"status":"good evening"}