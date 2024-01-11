import React from 'react';
import '../styles/services.css'

import { useServicesAPI } from '../../js/api';
import { useInView } from 'react-intersection-observer';
import SvgAnimation from '../../js/svg_animation';
import SmoothScrollComponent from '../../js/global';

function Services() {
    const servicesData = useServicesAPI('http://127.0.0.1:5000');
    const DataScience = servicesData[1];
    const TradingAutomation = servicesData[0];
    const WebDevelopment = servicesData[2];
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // });
        
    // if (!inView) {
    //     return <section ref={ref} id="bio" className="bg-none" />;
    // }

    return (
        <section id="services" className="bg-none">
            <div className='closing-line'>
                <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                </svg>
                {/* <SvgAnimation /> */}
            </div>
            <div className="container-fluid">
                <div className='services-h3'>
                    Services
                </div>
                <div className="row">
                    <div className="col text-start">
                        <div className='services-title'>
                            {DataScience && DataScience.title}
                        </div>
                        <div>
                            <p style={{fontSize: "26px", textAlign: "start"}}>
                                <div>I will take care of organizing and optimizing your data with data engineering.</div>
                                <div>Additionally, I'll research the provided data to extract valuable insights through data mining.</div>
                                <div>Finally, I'll create clear and understandable data visualizations to help you make informed decisions.</div>
                            </p>
                        </div>
                    </div>        
                    <div className="col text-start">
                        <div className='services-title'>
                            {TradingAutomation && TradingAutomation.title}
                        </div>
                        <div>
                            <p style={{fontSize: "26px", textAlign: "start"}}>
                                <div>I will build a trading system, including data design
                                (market data capture, trading metrics, trading parameters
                                surfaces), trading strategy implementation, automatic order
                                execution and market data processing.</div>
                                <div>Additionally, I can conduct a backtest for your trading strategy that will help
                                you find the vulnerabilities and points of improvement of your trading strategy.</div>
                            </p>
                        </div>
                    </div>
                    <div className="col text-start">
                        <div className='services-title'>
                            {WebDevelopment && WebDevelopment.title}
                        </div>
                        <div>
                            <p style={{fontSize: "26px", textAlign: "start"}}>
                                <div>I will handle the entire development process for your website, covering both frontend and backend components.</div>
                                <div>On the frontend, I'll create the user interface, ensuring it's visually appealing and user-friendly.</div>
                                <div>For the backend, I'll implement the server-side logic, manage databases, 
                                and develop APIs.</div>
                            </p>
                        </div>
                    </div>
                </div>
                    <div className='contact-me-services'>
                        <div className='closing-line'>
                            <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                            </svg>
                        {/* <SvgAnimation /> */}
                        </div>
                        <a className="nav-link js-scroll-trigger" href="#contacts">Contact me</a>
                    <SmoothScrollComponent />
                </div>
            </div>
        </section>
    );
}

export default Services;
