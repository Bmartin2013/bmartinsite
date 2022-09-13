import React from "react";
import { title, subtitle } from "../data/metadata.json"
import SectionWrapper from "../components/SectionWrapper";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const Home = () => (
    <SectionWrapper >
        <HeroBanner title={title} subtitle={subtitle} />
    </SectionWrapper>
);

export default Home;