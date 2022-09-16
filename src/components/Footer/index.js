import React from "react";
import 'bulma/css/bulma.min.css';
import './styles'
import { socialMedia } from "../../data/metadata.json"
import FooterComponent from "./FooterComponent";

const FooterContainer = () => {
    return (
        <footer
            id="footer">
            <FooterComponent
                socialMedia={socialMedia}
            />
        </footer>
    );
}
export default FooterContainer;