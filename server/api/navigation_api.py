from flask import Blueprint, request, current_app
from create import *
from models.room import *
from models.building import *
from controllers.room_controller import *


nav = Blueprint("nav", __name__, url_prefix="/api/v1/nav")


@nav.route("/to_rooms", methods=["POST"])
def get_route():
    try:
        data = request.get_json(force=True)
        responce = []
        # responce = rooms_by_building(data["building_name"])
        return {"status": "success", "data": responce}, 200
    except Exception as e:
        current_app.logger.info("exception: ", e)
        return {"message": f"error {e}"}, 500
