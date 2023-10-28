from sqlalchemy import Column, String, Integer
from base import *

"""Muildings"""
class Building(Base):
    __tablename__ = "buildings"
    id = Column(Integer, primary_key=True)
    building_name = Column(String, nullable=False)
    lat = Column(Integer, nullable=False)
    lng = Column(Integer, nullable=False)