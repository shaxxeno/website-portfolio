from flask import request
from flask_restful import Resource
from models.public import Contact  # Assuming your Contact model is in models.public
from database.db import get_session
from datetime import datetime

class ContactResource(Resource):
    def get(self, user_id):
        with get_session() as session:
            contact = session.query(Contact).filter_by(user_id=user_id).first()
            if contact:
                return {
                    'user_id': contact.user_id,
                    'email': contact.email,
                    'linkedin_url': contact.linkedin_url,
                    'github_url': contact.github_url,
                    'created_at': contact.created_at.strftime('%Y-%m-%d %H:%M:%S')
                }
            else:
                return {'message': 'Contact not found'}, 404

    def put(self, user_id):
        with get_session() as session:
            contact = session.query(Contact).filter_by(user_id=user_id).first()
            if contact:
                data = request.get_json()
                contact.email = data['email']
                contact.linkedin_url = data['linkedin_url']
                contact.github_url = data['github_url']
                session.commit()
                return {'message': 'Contact updated successfully'}
            else:
                return {'message': 'Contact not found'}, 404

    def delete(self, user_id):
        with get_session() as session:
            contact = session.query(Contact).filter_by(user_id=user_id).first()
            if contact:
                session.delete(contact)
                session.commit()
                return {'message': 'Contact deleted successfully'}
            else:
                return {'message': 'Contact not found'}, 404

class ContactListResource(Resource):
    def get(self):
        with get_session() as session:
            contacts = session.query(Contact).all()
            contact_list = []
            for contact in contacts:
                contact_list.append({
                    'user_id': contact.user_id,
                    'email': contact.email,
                    'linkedin_url': contact.linkedin_url,
                    'github_url': contact.github_url,
                    'created_at': contact.created_at.strftime('%Y-%m-%d %H:%M:%S')
                })
            return {'contacts': contact_list}

    def post(self):
        data = request.get_json()
        new_contact = Contact(
            user_id=data['user_id'],
            email=data['email'],
            linkedin_url=data.get('linkedin_url'),
            github_url=data.get('github_url'),
            created_at=datetime.utcnow()
        )
        with get_session() as session:
            session.add(new_contact)
            session.commit()
            return {'message': 'Contact created successfully', 'user_id': new_contact.user_id}

