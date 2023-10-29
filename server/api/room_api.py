from flask import Blueprint, request, current_app
from create import *
from models.room import *
from models.building import *
from controllers.room_controller import *


room = Blueprint("room", __name__, url_prefix="/api/v1/room")

@room.route("/rooms_bld", methods=["POST"])
def get_rooms_building():
    try:
        data = request.get_json(force=True)
        responce = rooms_by_building(data["building_name"])
        return {"status": "success", "data": responce}, 200
    except Exception as e:
        current_app.logger.info("exception: ", e)
        return {"message": f"error {e}"}, 500
