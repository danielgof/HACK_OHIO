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
            "building_descr": bld.building_descr,
            "lat": bld.lat,
            "lng": bld.lng,
        })
    return res

def building_search(query):
    query = session.query(Building).filter(Building.building_name.like(f"%{query}%")).all()
    res = []
    for bld in query:
        res.append({
            "id": bld.id,
            "building_name": bld.building_name,
            "building_descr": bld.building_descr,
            "lat": bld.lat,
            "lng": bld.lng,
        })
    return res