from flask import Blueprint, request
from create import *
from models.room import *
from models.building import *


def rooms_by_building(query):
    query = session.query(Room).filter(Building.building_name == query).all()
    res = []
    for room in query:
        res.append({
            "id": room.id,
            "room_name": room.room_name,
            "descr": room.room_descr,
            "floor": room.floor,
        })
    return res