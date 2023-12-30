// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top bg-none">
            <div class="container-fluid">
                <a class="nav-link text-dark js-scroll-trigger" href="#home">Home</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-dark js-scroll-trigger" href="#bio">Bio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark js-scroll-trigger" href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;