import React from "react";
import 'bulma/css/bulma.min.css';
import './styles.css'
import Icon from '@mdi/react'

const MediaBtnComponent = ({ link, title, icon, size = 1 }) => {
    return (
        <a
            class="span-icon"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>
                <Icon
                    path={icon}
                    title={title}
                    size={size}
                />
            </span>
        </a>
    )
}
export default MediaBtnComponent;