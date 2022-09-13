import React from "react";
import 'bulma/css/bulma.min.css';
import './styles'
import { socialMedia } from "../../data/metadata.json"
import FooterComponent from "./FooterComponent";

const FooterContainer = () => {
    return (
        <footer id="footer">
            <div id="sm-container">
                <FooterComponent
                    socialMedia={socialMedia}
                />
            </div>
        </footer>
    );
}
export default FooterContainer;