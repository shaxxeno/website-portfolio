from flask import request
from flask_restful import Resource
from models.public import Service  # Assuming your Service model is in models.public
from database.db import get_session
from datetime import datetime

class ServiceResource(Resource):
    def get(self, service_id):
        with get_session() as session:
            service = session.query(Service).filter_by(service_id=service_id).first()
            if service:
                return {
                    'service_id': service.service_id,
                    'user_id': service.user_id,
                    'title': service.title,
                    'description': service.description,
                    'created_at': service.created_at.strftime('%Y-%m-%d %H:%M:%S')
                }
            else:
                return {'message': 'Service not found'}, 404

    def put(self, service_id):
        with get_session() as session:
            service = session.query(Service).filter_by(service_id=service_id).first()
            if service:
                data = request.get_json()
                service.title = data['title']
                service.description = data['description']
                session.commit()
                return {'message': 'Service updated successfully'}
            else:
                return {'message': 'Service not found'}, 404

    def delete(self, service_id):
        with get_session() as session:
            service = session.query(Service).filter_by(service_id=service_id).first()
            if service:
                session.delete(service)
                session.commit()
                return {'message': 'Service deleted successfully'}
            else:
                return {'message': 'Service not found'}, 404

class ServiceListResource(Resource):
    def get(self):
        with get_session() as session:
            services = session.query(Service).all()
            service_list = []
            for service in services:
                service_list.append({
                    'service_id': service.service_id,
                    'user_id': service.user_id,
                    'title': service.title,
                    'description': service.description,
                    'created_at': service.created_at.strftime('%Y-%m-%d %H:%M:%S')
                })
            return {'services': service_list}

    def post(self):
        data = request.get_json()
        new_service = Service(
            user_id=data['user_id'],
            title=data['title'],
            description=data.get('description'),
            created_at=datetime.utcnow()
        )
        with get_session() as session:
            session.add(new_service)
            session.commit()
            return {'message': 'Service created successfully', 'service_id': new_service.service_id}

