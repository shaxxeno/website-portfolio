from dataclasses import dataclass

from environs import Env


@dataclass
class DbConfig:
    host: str
    password: str
    user: str
    database: str
    port: str


@dataclass
class Config:
    db: DbConfig


def load_config(path: str = None):
    env = Env()
    env.read_env(path)

    return Config(
        db=DbConfig(
            host=env.str('DB_HOST'),
            password=env.str('POSTGRES_PASSWORD'),
            user=env.str('POSTGRES_USER'),
            database=env.str('POSTGRES_DB'),
            port=env.str('DB_PORT')
        )
    )

