// API.js
import { useState, useEffect } from 'react';

export const useUserAPI = (userAPIEndpoint) => {
    const [userData, setUserData] = useState({
        full_name: '',
        job_position: '',
        bio: '',
    });

    useEffect(() => {
        // Fetch data from Flask API using the provided API endpoint
        fetch(`${userAPIEndpoint}/users`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming there is only one user in the array, you can modify this based on your actual API response
                const user = data.users[0];
                setUserData({
                    full_name: user.full_name,
                    job_position: user.job_position,
                    bio: user.bio,
                });
            })
            .catch((error) => console.error('Error fetching user data:', error));
    }, [userAPIEndpoint]);

    return userData;
};


export const useServicesAPI = (servicesAPIEndpoint) => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        // Fetch data from Flask API using the provided API endpoint
        fetch(`${servicesAPIEndpoint}/services`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming there are multiple services in the array, you can modify this based on your actual API response
                const services = data.services.map((service) => ({
                    service_id: service.service_id,
                    title: service.title,
                    description: service.description,
                }));
                setServicesData(services);
            })
            .catch((error) => console.error('Error fetching services data:', error));
    }, [servicesAPIEndpoint]);

    return servicesData;
};

export const useContactsAPI = (contactsAPIEndpoint) => {
    const [contactsData, setContactsData] = useState({
        email: '',
        linkedin_url: '',
        github_url: '',
    });

    useEffect(() => {
        // Fetch data from Flask API using the provided API endpoint
        fetch(`${contactsAPIEndpoint}/contacts`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming there is only one contact in the array, you can modify this based on your actual API response
                const contact = data.contacts[0];
                setContactsData({
                    email: contact.email,
                    linkedin_url: contact.linkedin_url,
                    github_url: contact.github_url,
                });
            })
            .catch((error) => console.error('Error fetching contacts data:', error));
    }, [contactsAPIEndpoint]);

    return contactsData;
};

