// Home.js
import React from 'react';
import AnimationComponent from '../js/home_animation';

import mailImage from '../img/mail.svg';
import linkedinImage from '../img/linkedin.svg';
import githubImage from '../img/github.svg';
import downArrowImage from '../img/down-arrow-1.svg';

const Home = () => {
    return (
        <section id="home" className="bg-none">
            <div className="container text-center">
                <h1> Dmytro Novikov </h1>
                <p>POH POH</p>
                <a href="{{ contact.email }}">
                    <img src={mailImage} className="img-fluid" alt="email" style={{ width: '70px', height: '70px' }} />
                </a>
                <a href="{{ contact.linkedin_url }}">
                    <img src={linkedinImage} className="img-fluid" alt="linkedin_url" style={{ width: '70px', height: '70px' }} />
                </a>
                <a href="{{ contact.github_url }}">
                    <img src={githubImage} className="img-fluid" alt="github_url" style={{ width: '70px', height: '70px' }} />
                </a>
            </div>
            <div className="arrowlanding text-center">
                <a className="js-scroll-trigger" href="#bio">
                    <img src={downArrowImage} className="img-fluid" alt="down-arrow" style={{ width: '70px', height: '70px' }} />
                </a>
            </div>
            <AnimationComponent />
        </section>
    );
};

export default Home;
