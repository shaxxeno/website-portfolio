import '../styles/home.css'
import React, { useState } from 'react';
import AnimationComponent from '../../js/home_animation';
import { useUserAPI, useContactsAPI } from '../../js/api';

import mailImage from '../../img/mail.svg';
import linkedinImage from '../../img/linkedin.svg';
import githubImage from '../../img/github.svg';

function Home() {
    // const userData = useUserAPI('http://127.0.0.1:5000');
    // const contactsData = useContactsAPI('http://127.0.0.1:5000');
    const [copyNotification, setCopyNotification] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('novvikovdmitry@gmail.com')
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
        <section id="home" className="bg-none">
            <div className="container-fluid text-center">
                {/* <h1> {userData.full_name} </h1> */}
                <h1>Dmytro Novikov</h1>
                {/* <p className='job-position'>{userData.job_position}</p> */}
                <p className='job-position'>Software developer</p>
                <a
                href={`mailto:$novvikovdmitry@gmail.com`}
                onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard();
                }}
                className="column-direction-link"
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

                <a href='https://www.linkedin.com/in/dmytro-noviikov/' className="column-direction-link">
                    <img src={linkedinImage} className="img-fluid" alt="linkedin_url"/>
                </a>
                <a href='https://github.com/shaxxeno' className="column-direction-link">
                    <img src={githubImage} className="img-fluid" alt="github_url"/>
                </a>
            </div>
            <div className='closing-line'>
                <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                </svg>
            </div>
            <AnimationComponent />
        </section>
    );
}

export default Home;
