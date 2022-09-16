import React from "react";
import 'bulma/css/bulma.min.css';
import './styles.css'
import Icon from '@mdi/react'
import { mdiLinkedin, mdiGithub, mdiEmailOpenMultipleOutline, mdiGoogleDrive, mdiRss } from '@mdi/js';

const FooterBtn = ({ link, title, name }) => {
    // TODO: how can I improve this to avoid this big switch
    const detectIcon = (mediaName) => {
        switch (mediaName) {
            case "medium":
                return mdiRss;
                break;
            case "drive":
                return mdiGoogleDrive;
                break;
            case "email":
                return mdiEmailOpenMultipleOutline;
                break;
            case "github":
                return mdiGithub;
                break;
            case "linkedin":
                return mdiLinkedin;
                break;
            default:
                return null;
        }
    }

    const btnIcon = detectIcon(name);
    return (
        btnIcon && <a class="span-icon" href={link} target="_blank" rel="noopener noreferrer">
            <span>
                <Icon path={btnIcon}
                    title={title}
                    size={1} />
            </span>
        </a>
    )
}
export default FooterBtn;