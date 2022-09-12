import React from "react";
import { title, subtitle } from "../data/metadata.json"
import SectionWrapper from "../components/SectionWrapper";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const Home = () => (
    // TODO: pass children respecting DOM hierarchy (not as a prop)
    <SectionWrapper children={<HeroBanner title={title} subtitle={subtitle} />} />
);

export default Home;