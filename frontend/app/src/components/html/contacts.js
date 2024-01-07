import React, { useState } from 'react';
import {useContactsAPI } from '../js/api';

function Contacts() {
    const contactsData = useContactsAPI('http://127.0.0.1:5000');
    const [copyNotification, setCopyNotification] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contactsData.email)
            .then(() => {
                setCopyNotification(true);
                setTimeout(() => {
                    setCopyNotification(false);
                }, 1500);
            })
            .catch(err => {
                console.error('Error copying to clipboard: ', err);
            });
    };
    return (
        <section id="contacts" class="bg-none">
            <div className='container-fluid text-center'>
                <h3 style={{letterSpacing: "5px", fontSize: "52px", fontWeight: "300"}}>Contacts</h3>
                <p style={{marginTop: "50px", fontSize: "20px"}}>Feel free to contact me for any question. For open source projects, 
                please open an issue or a pull request on Github. For business inquiries, contact me via Email. 
                For job proposals, follow me on LinkedIn.</p>
                <div className="row" style={{paddingTop: "100px"}}>
                    <div className="col-4 text-end">
                        <a href={`mailto:${contactsData.email}`} onClick={(e) => { e.preventDefault(); copyToClipboard(); }}>Email</a>
                        <div className={`email-copy ${copyNotification ? 'active' : ''}`}>Copied to clipboard!</div>
                    </div>
                    <div className="col-4">
                        <a href={contactsData.linkedin_url}>LinkedIn</a>
                    </div>
                    <div className="col-4 text-start">
                        <a href={contactsData.github_url}>Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
