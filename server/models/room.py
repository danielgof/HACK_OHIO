import json
from sqlalchemy import Column, String, Integer, Table, ForeignKey, Float
from base import *

"""Rooms"""
class Room(Base):
    __tablename__ = "room"
    id = Column(Integer, primary_key=True)
    room_name = Column(String, nullable=False)
    floor = Column(Float, nullable=False)
    P1_lat = Column(Float, nullable=False)
    P1_lng = Column(Float, nullable=False)
    P2_lat = Column(Float, nullable=False)
    P2_lng = Column(Float, nullable=False)
    P3_lat = Column(Float, nullable=False)
    P3_lng = Column(Float, nullable=False)
    P4_lat = Column(Float, nullable=False)
    P4_lng = Column(Float, nullable=False)

    def to_json(self):
        # Create a dictionary representation of the room
        room_json = {
            'id': self.id,
            'room_name': self.room_name,
            'floor': self.floor,
            'P1_lat': self.P1_lat,
            'P1_lng': self.P1_lng,
            'P2_lat': self.P2_lat,
            'P2_lng': self.P2_lng,
            'P3_lat': self.P3_lat,
            'P3_lng': self.P3_lng,
            'P4_lat': self.P4_lat,
            'P4_lng': self.P4_lng
        }
        return json.dumps(room_json)

building_rooms_association = Table(
    "building_rooms", Base.metadata,
    Column("building_id", Integer, ForeignKey("building.id", ondelete="CASCADE",
     onupdate="CASCADE")),
    Column("room_id", Integer, ForeignKey("room.id", ondelete="CASCADE",
     onupdate="CASCADE"))
)