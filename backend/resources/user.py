from flask import request, jsonify
from flask_restful import Resource
from sqlalchemy import desc
from models.public import User
from database.db import get_session
from datetime import datetime

class UserResource(Resource):
    def get(self, user_id):
        with get_session() as session:
            user = session.query(User).filter_by(user_id=user_id).first()
            if user:
                return {
                    'user_id': user.user_id,
                    'full_name': user.full_name,
                    'job_position': user.job_position,
                    'bio': user.bio,
                    'created_at': user.created_at.strftime('%Y-%m-%d %H:%M:%S')  # Convert datetime to string
                }
            else:
                return {'message': 'User not found'}, 404

    def put(self, user_id):
        with get_session() as session:
            user = session.query(User).filter_by(user_id=user_id).first()
            if user:
                data = request.get_json()
                user.full_name = data['full_name']
                user.job_position = data['job_position']
                user.bio = data['bio']
                session.commit()
                return {'message': 'User updated successfully'}
            else:
                return {'message': 'User not found'}, 404

    def delete(self, user_id):
        with get_session() as session:
            user = session.query(User).filter_by(user_id=user_id).first()
            if user:
                session.delete(user)
                session.commit()
                return {'message': 'User deleted successfully'}
            else:
                return {'message': 'User not found'}, 404

class UserListResource(Resource):
    def get(self):
        with get_session() as session:
            users = session.query(User).all()
            user_list = []
            for user in users:
                user_list.append({
                    'user_id': user.user_id,
                    'full_name': user.full_name,
                    'job_position': user.job_position,
                    'bio': user.bio,
                    'created_at': user.created_at.strftime('%Y-%m-%d %H:%M:%S')  # Convert datetime to string
                })
            return {'users': user_list}

    def post(self):
        data = request.get_json()
        new_user = User(
            full_name=data['full_name'],
            job_position=data.get('job_position'),
            bio=data.get('bio'),
            created_at=datetime.utcnow()
        )
        with get_session() as session:
            session.add(new_user)
            session.commit()
            return {'message': 'User created successfully', 'user_id': new_user.user_id}

