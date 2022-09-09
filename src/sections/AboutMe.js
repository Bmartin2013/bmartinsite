import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const AboutMe = () => (
    // TODO: pass children respecting DOM hierarchy (not as a prop)
    <SectionWrapper children={<p>Here I'll talk about myself with a little twist</p>} />
);

export default AboutMe;