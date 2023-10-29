from flask import Blueprint, request
from create import *
from models.room import *
from models.building import *
from controllers import room_controller


room = Blueprint("room", __name__, url_prefix="/api/v1/room")

@room.route("/rooms_bld", methods=["POST"])
def get_rooms_building():
    return room_controller.get_rooms_building()