from flask import Blueprint, request
from create import *
from models.room import *
from models.building import *

def bulilding_rooms(int: id):
    pass

def get_rooms_building():
    data = request.get_json(force=True)
    query = session.query(Room).filter(Building.building_name == data["building_name"]).all()
    res = []
    for room in query:
        res.append(room.to_json())
    return res