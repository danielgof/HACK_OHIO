from flask import Blueprint, request, jsonify, abort, send_file, Response

building = Blueprint("building", __name__, url_prefix="/api/v1/building")

@building.route("/", methods=["GET"])
def get_buildings() -> dict:
    return {"status":"good morning"}