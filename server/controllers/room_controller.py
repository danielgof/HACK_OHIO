from flask import Blueprint, request
from create import *
from models.room import *
from models.building import *


def get_rooms_building(data):
    query = session.query(Room).filter(Building.building_name == data["building_name"]).all()
    res = []
    for room in query:
        res.append({
            "id": room.id,
            "room_name": room.room_name,
            "floor": room.floor
        })
    return res