from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

import models.buildings
from base import *
from utils.configs import get_configs

db_username, db_password, db_name, = get_configs()
engine = create_engine(f"postgresql://{db_username}:{db_password}@localhost:5432/{db_name}")
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()