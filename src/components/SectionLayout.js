import React from "react";
import 'bulma/css/bulma.min.css';
import Footer from "./Footer";

// children is a special key to indicate that this component can wrap subcomponents
const SectionLayout = ({ children }) => (
    <div className="section">
        {children}
        <Footer />
    </div>
);

export default SectionLayout;