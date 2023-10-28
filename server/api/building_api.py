from flask import Blueprint
from create import *
from server.models.building import *


building = Blueprint("building", __name__, url_prefix="/api/v1/building")

@building.route("/", methods=["GET"])
def index():
    session.add(Building(building_name="Ohio Union", lat=35, lng=35))
    session.commit()
    session.close()
    return {"status":"good evening"}