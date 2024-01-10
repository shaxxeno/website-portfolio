import React from 'react';

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
                <li><a className="menu__item" href="#home" onClick={handleMenuClick}>Home</a></li>
                <li><a className="menu__item" href="#bio" onClick={handleMenuClick}>Bio</a></li>
                <li><a className="menu__item" href="#services" onClick={handleMenuClick}>Services</a></li>
                <li><a className="menu__item" href="#contacts" onClick={handleMenuClick}>Contacts</a></li>
            </ul>
        </nav>
    );
}

export default ResponsiveNavbar;
