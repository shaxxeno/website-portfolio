import React, { useEffect } from 'react';

function AnimationComponent() {
    useEffect(() => {
        const handleAnimationEnd = () => {
            document.body.classList.add("show-overflow");
        };

        const h1Element = document.querySelector("h1");

        // Initial styles
        h1Element.style.transform = "translateY(50px)";

        h1Element.addEventListener("animationend", handleAnimationEnd);

        // Start additional slide animation after a delay
        setTimeout(() => {
            var startTime;
            var duration = 500; // 500 milliseconds (0.5 seconds)

            function slideAnimation(timestamp) {
                if (!startTime) startTime = timestamp;

                var progress = timestamp - startTime;
                var completion = Math.min(progress / duration, 1);

                h1Element.style.opacity = completion;
                h1Element.style.transform = "translateY(" + (50 - 50 * completion) + "px)";

                if (completion < 1) {
                    requestAnimationFrame(slideAnimation);
                }
            }

            requestAnimationFrame(slideAnimation);
        }, 1500); // 1500 milliseconds (1.5 seconds) delay

        return () => {
            h1Element.removeEventListener("animationend", handleAnimationEnd);
        };
    }, []);

    return null;
}

export default AnimationComponent;
