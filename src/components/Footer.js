import React from "react";
import 'bulma/css/bulma.min.css';
import '../styles/styles.css'
import FooterBtn from "./FooterBtn";
import { mdiLinkedin, mdiGithub, mdiEmailOpenMultipleOutline, mdiGoogleDrive, mdiRss } from '@mdi/js';

// TODO: Is there any way to automatically add buttons from metadata without adding a new component
const Footer = ({ email, linkedin, github, medium, drive }) => {
    return (
        <footer id="footer">
            <div id="sm-container">
                <FooterBtn btnMetadata={{ ...email, icon: mdiEmailOpenMultipleOutline }}></FooterBtn>
                <FooterBtn btnMetadata={{ ...linkedin, icon: mdiLinkedin }}></FooterBtn>
                <FooterBtn btnMetadata={{ ...github, icon: mdiGithub }}></FooterBtn>
                <FooterBtn btnMetadata={{ ...medium, icon: mdiRss }}></FooterBtn>
                <FooterBtn btnMetadata={{ ...drive, icon: mdiGoogleDrive }}></FooterBtn>
            </div>
        </footer>
    );
}
export default Footer;