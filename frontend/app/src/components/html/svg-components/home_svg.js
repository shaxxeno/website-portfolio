import React, { useEffect, useState } from 'react';
import SvgAnimation from '../../js/svg_animation';
import { useInView } from 'react-intersection-observer';

function HomeSvg() {
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.6,
    // });

    // if (!inView) {
    //     return <section ref={ref} className="home-svg bg-none" />;
    // }

    return (
        <section className="home-svg bg-none">
            <div className="container-fluid" style={{padding: 0}}>
                <svg width="100%" height="100%" viewBox="0 0 1921 922" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className='animated-element' x="854.333" y="576" width="106.667" height="115" stroke="black"/>
                    <rect className='animated-element' x="961" y="576" width="106.667" height="115" stroke="black"/>
                    <path className='animated-element' d="M1067.67 921V691H854.333V921" stroke="black"/>
                    <path className='animated-element' d="M1387.67 921V576H1067.67V921" stroke="black"/>
                    <path className='animated-element' d="M854.333 1.00006V576H1387.67V1.00006" stroke="black"/>
                    <path className='animated-element' d="M854.333 1.00003V921" stroke="black"/>
                    <path className='animated-element' d="M1387.67 1.00003L1387.67 346L1707.67 346L1707.67 1" stroke="black"/>
                    <path className='animated-element' d="M1387.67 921L1387.67 346L1921 346" stroke="black"/>
                    <path className='animated-element' d="M961 576L1014.33 688.946L1067.67 576" stroke="black"/>
                    <path className='animated-element' d="M854.333 576L907.667 688.946L961 576" stroke="black"/>
                    <path className='animated-element' d="M1 921C1 412.898 383.05 1.00003 854.333 1.00003" stroke="black"/>
                    <path className='animated-element' d="M854.333 1.00007C1148.89 1.00006 1387.67 258.436 1387.67 576" stroke="black"/>
                    <path className='animated-element' d="M1387.67 576C1387.67 766.538 1244.4 921 1067.67 921" stroke="black"/>
                    <ellipse className='animated-element' cx="961" cy="806" rx="106.667" ry="115" stroke="black"/>
                    <line className='animated-element' x1="854.333" y1="809.607" x2="1067.67" y2="809.607" stroke="black"/>
                    <line className='animated-element' x1="1" y1="920.5" x2="1921" y2="920.5" stroke="black"/>
                    <line className='animated-element' x1="1" y1="0.5" x2="1921" y2="0.5" stroke="black"/>
                </svg>
            </div>
            {/* <SvgAnimation /> */}
        </section>
    );
}

export default HomeSvg;
