import React, { useEffect } from 'react';

function SmoothScrollComponent() {
    useEffect(() => {
        const smoothScroll = (targetElement, duration) => {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

            if (timeElapsed < duration) {
            requestAnimationFrame(animation);
            }
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        requestAnimationFrame(animation);
        };

        const handleClick = (e) => {
        e.preventDefault();

        const targetId = e.currentTarget.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            smoothScroll(targetElement, 800); // Adjust the duration (in milliseconds) as needed

            // Update the URL without the hash
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
        }
        };

        // Attach click event to all anchor links starting with "#"
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', handleClick);
        });

        return () => {
        // Cleanup event listener when the component unmounts
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.removeEventListener('click', handleClick);
        });
        };
    }, []);

    return null;
}

export default SmoothScrollComponent;
