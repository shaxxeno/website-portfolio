import React from 'react';
import SvgAnimation from '../js/svg_animation';
import { useInView } from 'react-intersection-observer';

function ContactsSvg() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (!inView) {
        return <section ref={ref} className="contacts-svg bg-none" />;
    }

    return (
        <section ref={ref} className="contact-svg bg-none overflow-hidden">
            <div className='container-fluid overflow-hidden' style={{padding: "0px"}}>
                <div className='closing-line'>
                    <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                    </svg>
                </div>
                <svg className='contacts-svg' width="1920" height="273" viewBox="0 0 1922 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='animated-element' d="M1611 1L1766 272L1921 0.999971" stroke="black"/>
                    <path className='animated-element' d="M1289 1L1444 272L1599 0.999971" stroke="black"/>
                    <path className='animated-element' d="M967 1L1122 272L1277 0.999971" stroke="black"/>
                    <path className='animated-element' d="M1.00001 1L156 272L311 0.999971" stroke="black"/>
                    <path className='animated-element' d="M323 1L478 272L633 0.999971" stroke="black"/>
                    <path className='animated-element' d="M645 1L800 272L955 0.999971" stroke="black"/>
                </svg>
                <div className='closing-line'>
                    <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                    </svg>
                </div>
            </div>
            <SvgAnimation />
        </section>
    );
}

export default ContactsSvg;
