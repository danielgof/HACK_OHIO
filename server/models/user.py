from sqlalchemy import Column, String, Integer
from base import *


class User(Base):
    """Users table"""
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(256))
    phone = Column(String(256))
    email = Column(String(256), nullable=False)
    password = Column(String(256), nullable=False)
    confirmed = Column(Integer, default=0)