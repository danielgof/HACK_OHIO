from sqlalchemy import Column, String, Float, Integer
from sqlalchemy.orm import relationship
from models.room import *
from base import *

"""Buildings"""
class Building(Base):
    __tablename__ = "building"
    id = Column(Integer, primary_key=True)
    building_name = Column(String, nullable=False)
    building_descr = Column(String, nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    rooms = relationship("Room", secondary=building_rooms_association)
    