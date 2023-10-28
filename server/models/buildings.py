from sqlalchemy import Column, String, Integer
from utils.base import *

"""Buildings"""
class Building(Base):
    __tablename__ = "buildings"
    id = Column(Integer, primary_key=True)
    building_name = Column(String, nullable=False)
    lat = Column(Integer, nullable=False)
    lng = Column(Integer, nullable=False)