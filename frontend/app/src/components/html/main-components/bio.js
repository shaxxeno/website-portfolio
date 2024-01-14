import React from 'react';
import '../styles/bio.css'

import profilePicture from '../../img/profile_picture.jpg';
import SvgAnimation from '../../js/svg_animation';
import { useUserAPI } from '../../js/api'
import { useInView } from 'react-intersection-observer';

function Bio() {
    // const userData = useUserAPI('http://127.0.0.1:5000');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
        
    if (!inView) {
        return <section ref={ref} id="bio" className="bg-none" />;
    }

    return (
        <section id="bio" className="bg-none">
            <div className='closing-line'>
                <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                </svg>
            </div>
            <div className='container-fluid'>
                <div className="row">
                <div
            className="col-4 custom-margin-left profile-picture"
            style={{ marginTop: "150px" }}
                >
                    <img
                    src={profilePicture}
                    className="img-fluid"
                    alt="Dmytro Novikov profile"
                    />
                </div>


                    <div className="col-8 bio-svg_container">
                        <div className="col-7">
                            <div
                                className="text-end"
                                style={{
                                fontSize: "52px",
                                marginBottom: "50px",
                                letterSpacing: "5px",
                                fontWeight: "300",
                                }}
                            >
                                Bio
                            </div>
                            <p>
                                Hi! I'm Dmytro, a 21-year-old software developer from Kyiv, Ukraine.
                            </p>
                            <p>I create with Python and C++.</p>
                            <p>
                                I am passionate about automation, working with data and building
                                fancy websites. My technology stack includes <b>Pandas, Numpy, Flask, FastApi, PostgreSQL, React</b> etc.
                            </p>
                            <p>
                                My favourite book is "England, England" by Julian Barnes.
                            </p>
                            <p>
                                I aspire to realize my own ideas. I value knowledge, and I'm grateful for every opportunity to gain more.
                            </p>
                            <p>
                                Thanks to all my friends and mentors who are helping me on my way. You are the best.
                            </p>
                            </div>
                            <div className="bio-svg">
                            <svg
                                viewBox="0 0 397 791"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                className="animated-element"
                                d="M264 649L134 704.5L264 760"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M134 517L2 572L134 627"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M396 517L264 572L396 627"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M2.00001 1.00001C219.6 1 396 190.384 396 424"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M2 1V424H396"
                                stroke="black"
                                />
                                <rect
                                className="animated-element"
                                x="2"
                                y="424"
                                width="394"
                                height="83"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M396 791V507H264V791"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M134 791V507H2V791"
                                stroke="black"
                                />
                                <path
                                className="animated-element"
                                d="M264 791V507H134V791"
                                stroke="black"
                                />
                                <rect
                                className="animated-element"
                                x="134"
                                y="507"
                                width="130"
                                height="124"
                                stroke="black"
                                />
                                <ellipse
                                className="animated-element"
                                cx="199"
                                cy="567"
                                rx="65"
                                ry="60"
                                stroke="black"
                                />
                            </svg>
                            </div>
                        </div>

                </div>
            </div>
            <div className='closing-line'>
                <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                </svg>
            </div>
            <SvgAnimation />
        </section>
    );
}

export default Bio;
