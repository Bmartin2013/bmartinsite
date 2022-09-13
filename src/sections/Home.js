import React from "react";
import { title, subtitle } from "../data/metadata.json"
import SectionLayout from "../components/SectionLayout";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const Home = () => (
    <SectionLayout >
        <HeroBanner title={title} subtitle={subtitle} />
    </SectionLayout>
);

export default Home;