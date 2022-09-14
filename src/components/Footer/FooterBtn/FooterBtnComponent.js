import React from "react";
import 'bulma/css/bulma.min.css';
import './styles.css'
import Icon from '@mdi/react'

const FooterBtnComponent = ({ link, title, icon, size = 1 }) => {
    return (
        btnIcon && <a class="span-icon" href={link} target="_blank" rel="noopener noreferrer">
            <span>
                <Icon path={icon}
                    title={title}
                    size={size} />
            </span>
        </a>
    )
}
export default FooterBtnComponent;