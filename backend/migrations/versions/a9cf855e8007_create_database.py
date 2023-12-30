"""create database

Revision ID: a9cf855e8007
Revises: 
Create Date: 2023-12-30 13:10:00.276259

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a9cf855e8007'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute(open("versions/up.sql", "r").read())


def downgrade() -> None:
    op.execute(open("versions/down.sql", "r").read())
