// Bio.js
import React from 'react';
import profilePicture from '../img/profile_picture.jpg';

const Bio = () => {
    return (
        <section id="bio" class="bg-none">
            <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <img src={profilePicture} className="img-fluid" alt="Dmytro Novikov profile picture"/>
                </div>

                <div class="col-lg-8">
                <p>DMYTRO NOVIKOV DMYTRO NOVIKOV DMYTRO NOVIKOV DMYTRO NOVIKOV DMYTRO NOVIKOV DMYTRO NOVIKOV</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Bio;