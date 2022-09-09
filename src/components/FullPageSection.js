import React from "react";
import 'bulma/css/bulma.min.css';
import Footer from "./Footer";
import { socialMedia } from "../data/metadata.json"

const FullPageSection = ({ children }) => (
    <div className="section">
        {children}
        {socialMedia && <Footer {...socialMedia} />}
    </div>
);

export default FullPageSection;