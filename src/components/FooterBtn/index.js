import React from "react";
import 'bulma/css/bulma.min.css';
import './styles.css'
import Icon from '@mdi/react'

const FooterBtn = ({ btnMetadata }) => {
    const { link, title, icon } = btnMetadata
    if (!btnMetadata) return null;
    
    return (
        <a class="span-icon" href={link} target="_blank" rel="noopener noreferrer">
            <span>
                <Icon path={icon}
                    title={title}
                    size={1} />
            </span>
        </a>
    )
}
export default FooterBtn;