from flask import Blueprint, request, current_app
from create import *
from models.building import *
from controllers.building_controller import *

building = Blueprint("building", __name__, url_prefix="/api/v1/building")

@building.route("/all", methods=["GET"])
def building_controller():
    try:
        responce = get_all()
        return {"status": "success", "data": responce}, 200
    except Exception as e:
        current_app.logger.info("exception: ", e)
        return {"message": f"error {e}"}, 500


@building.route("/bld_name", methods=["POST"])
def building_by_name():
    try:
        data = request.get_json(force=True)
        # print(data["building_name"])
        responce = building_search(data["building_name"])
        return {"status": "success", "data": responce}, 200 
    except Exception as e:
        current_app.logger.info("exception: ", e)
        return {"message": f"error {e}"}, 500
    




