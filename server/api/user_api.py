from flask import Blueprint, request, current_app
from create import *
from models.room import *
from models.building import *
from controllers.room_controller import *


user = Blueprint("user", __name__, url_prefix="/api/v1/user")

@user.route("/get_info", methods=["POST"])
def user_by_id():
    try:
        data = request.get_json(force=True)
        user = session.query(User).filter(User.id == data["id"]).first()
        responce = [{
            "id": user.id,
            "username": user.username,
            "phone": user.phone,
            "email": user.email,
            "password": user.password,
        }]
        # responce = rooms_by_building(data["building_name"])
        return {"status": "success", "data": responce}, 200
    except Exception as e:
        current_app.logger.info("exception: ", e)
        return {"message": f"error {e}"}, 500
