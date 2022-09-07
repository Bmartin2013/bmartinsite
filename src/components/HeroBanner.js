import React from "react";
import 'bulma/css/bulma.min.css';
import mydata from '../data/metadata.json'

const HeroBanner = () => {
    return (
        <section class="hero is-medium">
            <div class="hero-body">
                <p class="title">
                    {mydata.title}
                </p>
                <p class="subtitle">
                    {mydata.subtitle}
                </p>
            </div>
        </section>
    )
}
export default HeroBanner;