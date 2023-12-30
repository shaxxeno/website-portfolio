from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.pool import QueuePool
from core.config import load_config

config = load_config('.env')

database_url = f'postgresql+psycopg2://{config.db.user}:{config.db.password}@{config.db.host}:{config.db.port}/{config.db.database}'

engine = create_engine(
    database_url,
    echo=False,
    poolclass=QueuePool,
    pool_size=10
)

Session = sessionmaker(bind=engine)


def get_session():
    return Session()

