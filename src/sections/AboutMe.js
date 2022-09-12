import React from "react";
import Codepen from "react-codepen-embed";
import SectionWrapper from "../components/SectionWrapper";

const AboutMe = () => (
    // TODO: pass children respecting DOM hierarchy (not as a prop)
    <SectionWrapper children={ 
        <>
        <Codepen  
            height="910"
            hash="abGNLbv" 
            defaultTab="js,result" 
            preview="false"
            loader={() => <div>Loading...</div>}
            user="bmartin2013-the-decoder" 
        />
        </>} 
    />
);

export default AboutMe;