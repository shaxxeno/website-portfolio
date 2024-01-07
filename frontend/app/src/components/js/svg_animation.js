import React, { useEffect } from 'react';

const SvgAnimation = () => {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animated-element');

        animatedElements.forEach((element) => {
        const length = element.getTotalLength();
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
        });
    }, []);

    return null;
};

export default SvgAnimation;
