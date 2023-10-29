from flask import Blueprint
from create import *
from models.building import *


def get_all():
    data = session.query(Building).all()
    res = []
    for bld in data:
        res.append({
            "id": bld.id,
            "building_name": bld.building_name,
            "lat": bld.lat,
            "lng": bld.lng,
        })
    return res

def building_by_name():
    building1 = Building(id=1222, building_name="Ohio Union", lat=89, lng=40)
    building2 = Building(id=2333, building_name="Thonms lib", lat=91, lng=40)
    building3 = Building(id=34444, building_name="18 lib", lat=89, lng=41)
    building4 = Building(id=42323, building_name="Dreese Lab", lat=90, lng=40)
    buildings = [building1, building2, building3, building4]
    res = []
    for bld in buildings:
        res.append({
            "id": bld.id,
            "building_name": bld.building_name,
            "lat": bld.lat,
            "lng": bld.lng,
        })
    return res