import React from "react";
import Codepen from "react-codepen-embed";
import SectionLayout from "../components/SectionLayout";

const AboutMe = () => (
    <SectionLayout>
        <Codepen
            height="910"
            hash="abGNLbv"
            defaultTab="js,result"
            preview="false"
            loader={() => <div>Loading...</div>}
            user="bmartin2013-the-decoder"
        />
    </SectionLayout>
);

export default AboutMe;