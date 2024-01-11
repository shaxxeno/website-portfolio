import React, { useState } from 'react';
import '../styles/contacts.css'

import {useContactsAPI } from '../../js/api';

import mailImage from '../../img/mail.svg';
import linkedinImage from '../../img/linkedin.svg';
import githubImage from '../../img/github.svg';

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
                <p style={{marginTop: "50px", fontSize: "24px"}}>Feel free to contact me for any question. For open source projects, 
                please open an issue or a pull request on Github. For business inquiries or job proposals, contact me via Email or LinkedIn.</p>
                <div className='contact-links'>
                    <a
                    href={`mailto:${contactsData.email}`}
                    onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard();
                    }}
                    className="img-fluid_container"
                    >
                    <img
                        src={mailImage}
                        className="img-fluid"
                        alt="email"
                    />
                        <div className={`email-copy ${copyNotification ? "active" : ""}`}>
                            Copied to clipboard!
                        </div>
                    </a>

                    <a href={contactsData.linkedin_url}>
                        <img src={linkedinImage} className="img-fluid" alt="linkedin_url"/>
                    </a>
                    <a href={contactsData.github_url}>
                        <img src={githubImage} className="img-fluid" alt="github_url"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
