from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String(100), nullable=False)
    job_position = Column(Text)
    bio = Column(Text)
    created_at = Column(TIMESTAMP, server_default='CURRENT_TIMESTAMP')

    services = relationship('Service', back_populates='user')
    contacts = relationship('Contact', back_populates='user')


class Service(Base):
    __tablename__ = 'services'

    service_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    title = Column(String(30))
    description = Column(String(100))
    created_at = Column(TIMESTAMP, server_default='CURRENT_TIMESTAMP')

    user = relationship('User', back_populates='services')


class Contact(Base):
    __tablename__ = 'contacts'

    user_id = Column(Integer, ForeignKey('users.user_id'), primary_key=True)
    email = Column(String(50), nullable=False)
    linkedin_url = Column(String(100))
    github_url = Column(String(100))
    created_at = Column(TIMESTAMP, server_default='CURRENT_TIMESTAMP')

    user = relationship('User', back_populates='contacts')

