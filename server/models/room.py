import json
from sqlalchemy import Column, String, Integer, Table, ForeignKey, Float
from base import *

"""Rooms"""
class Room(Base):
    __tablename__ = "room"
    id = Column(Integer, primary_key=True)
    room_name = Column(String, nullable=False)
    room_descr = Column(String, nullable=False)
    floor = Column(Integer, nullable=False)
    P1_lat = Column(Float, nullable=False)
    P1_lng = Column(Float, nullable=False)
    P2_lat = Column(Float, nullable=False)
    P2_lng = Column(Float, nullable=False)
    P3_lat = Column(Float, nullable=False)
    P3_lng = Column(Float, nullable=False)
    P4_lat = Column(Float, nullable=False)
    P4_lng = Column(Float, nullable=False)

building_rooms_association = Table(
    "building_rooms", Base.metadata,
    Column("building_id", Integer, ForeignKey("building.id", ondelete="CASCADE",
     onupdate="CASCADE")),
    Column("room_id", Integer, ForeignKey("room.id", ondelete="CASCADE",
     onupdate="CASCADE"))
)