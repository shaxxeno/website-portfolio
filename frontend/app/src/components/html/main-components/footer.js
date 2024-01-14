import React from 'react';
import '../styles/footer.css'

import SvgAnimation from '../../js/svg_animation';

function Footer() {
    return (
        <footer class="footer py-5 mt-5 bg-none">
            <div class="container-fluid text-center">
                <div className='closing-line'>
                    <svg width="1920" height="1" viewBox="0 0 1920 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className='animated-element' y1="0.5" x2="1920" y2="0.5" stroke="black"/>
                    </svg>
                <SvgAnimation />
                </div>
                <small class="text-muted">&copy; Dmytro Novikov. All Rights Reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
