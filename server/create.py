from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from models.building import *
from utils import get_configs
from base import *

db_username, db_password, db_name, = get_configs()
engine = create_engine(f"postgresql://{db_username}:{db_password}@localhost:5432/{db_name}")
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
building1 = Building(building_name="Ohio Union", lat=89, lng=40)
building2 = Building(building_name="Thonms lib", lat=91, lng=40)
building3 = Building(building_name="18 lib", lat=89, lng=41)
building4 = Building(building_name="Dreese Lab", lat=90, lng=40)

rooms_to_create = [
    Room(
        room_name="Room 101",
        floor=1,
        P1_lat=40.123,
        P1_lng=-74.456,
        P2_lat=40.124,
        P2_lng=-74.457,
        P3_lat=40.125,
        P3_lng=-74.458,
        P4_lat=40.126,
        P4_lng=-74.459
    ),
    Room(
        room_name="Room 102",
        floor=2,
        P1_lat=40.223,
        P1_lng=-74.556,
        P2_lat=40.224,
        P2_lng=-74.557,
        P3_lat=40.225,
        P3_lng=-74.558,
        P4_lat=40.226,
        P4_lng=-74.559
    ),
]
building1.rooms = rooms_to_create
# session.add(building1)
# session.add(building2)
# session.add(building3)
# session.add(building4)
# session.commit()
