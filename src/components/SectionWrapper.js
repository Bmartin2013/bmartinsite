import React from "react";
import 'bulma/css/bulma.min.css';
import Footer from "./Footer";
import { socialMedia } from "../data/metadata.json"

// children is a special key to indicate that this component can wrap subcomponents
const SectionWrapper = ({ children }) => (
    <div className="section">
        {children}
        {socialMedia && <Footer {...socialMedia} />}
    </div>
);

export default SectionWrapper;