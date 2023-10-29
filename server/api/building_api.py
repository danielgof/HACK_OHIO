from flask import Blueprint
from create import *
from models.building import *
from controllers import building_controller

building = Blueprint("building", __name__, url_prefix="/api/v1/building")

@building.route("/all", methods=["GET"])
def building_controller():
    return building_controller.get_all()

@building.route("/bld_name", methods=["POST"])
def building_by_name():
    return building_controller.building_by_name()




