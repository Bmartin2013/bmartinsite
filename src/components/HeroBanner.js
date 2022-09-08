import React from "react";
import 'bulma/css/bulma.min.css';
import mydata from '../data/metadata.json'

const HeroBanner = () => {
    return (
        <section class="hero is-medium is-spaced">
            <div class="hero-body">
                <p class="title is-spaced">
                    {mydata.title}
                </p>
                <p class="subtitle is-4">
                    {mydata.subtitle}
                </p>
            </div>
        </section>
    )
}
export default HeroBanner;