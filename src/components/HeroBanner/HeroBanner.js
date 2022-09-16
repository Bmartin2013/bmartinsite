import React from "react";
import 'bulma/css/bulma.min.css';
import "./styles"

const HeroBanner = ({ title, subtitle }) => {
    return (
        <section class="hero is-medium is-spaced">
            <div class="hero-body">
                <p class="title is-spaced is-link-title">
                    {title}
                </p>
                <p class="subtitle is-4">
                    {subtitle}
                </p>
            </div>
        </section>
    )
}
export default HeroBanner;