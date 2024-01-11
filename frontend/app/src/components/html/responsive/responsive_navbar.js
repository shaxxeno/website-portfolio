import React from 'react';
import '../styles/global.css';


function ResponsiveNavbar() {
    
    const handleMenuClick = () => {
        document.getElementById('menu__toggle').checked = false;
    };

    return (
        <nav className="main-nav fixed-top hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            
            <ul className="menu__box">
                <li>
                    <div className='closing-line'>
                        <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                        </svg>
                    </div>
                    <a className="menu__item" href="#home" onClick={handleMenuClick}>Home</a>
                    <div className='closing-line'>
                        <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <a className="menu__item" href="#bio" onClick={handleMenuClick}>Bio</a>
                    <div className='closing-line'>
                        <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <a className="menu__item" href="#services" onClick={handleMenuClick}>Services</a>
                    <div className='closing-line'>
                        <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <a className="menu__item" href="#contacts" onClick={handleMenuClick}>Contacts</a>
                    <div className='closing-line'>
                        <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                        </svg>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default ResponsiveNavbar;
