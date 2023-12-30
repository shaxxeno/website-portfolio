from flask_restful import Api
from resources.user import UserResource, UserListResource
from resources.services import ServiceResource, ServiceListResource
from resources.contacts import ContactResource, ContactListResource

def initialize_routes(api):
    api.add_resource(UserResource, '/users/<int:user_id>')
    api.add_resource(UserListResource, '/users')
    api.add_resource(ServiceResource, '/services/<int:service_id>')
    api.add_resource(ServiceListResource, '/services')
    api.add_resource(ContactResource, '/contacts/<int:user_id>')
    api.add_resource(ContactListResource, '/contacts')
