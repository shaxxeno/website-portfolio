import React, { useEffect, useState } from 'react';

function Navbar() {
    const [navbarStyle, setNavbarStyle] = useState({
        transform: 'translate(0px, 0)',
        transition: 'transform 0.5s ease-in-out',
    });
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Determine the scroll direction
            const isScrollingUp = currentScrollPos < prevScrollPos;

            // Update the transform property based on scroll direction
            setNavbarStyle((prevStyle) => ({
                ...prevStyle,
                transform: isScrollingUp || currentScrollPos === 0 ? 'translate(0px, 0)' : `translate(0px, ${-currentScrollPos}px)`,
            }));

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-none" style={navbarStyle}>
            <div className="container-fluid">
                <a className="nav-link text-dark js-scroll-trigger" href="#home">
                    Home
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#bio">
                                Bio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contacts">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
