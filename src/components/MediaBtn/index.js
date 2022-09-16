import React from "react";
import 'bulma/css/bulma.min.css';
import './styles.css'
import MediaBtnComponent from "./MediaBtnComponent";

const MediaBtnContainer = ({ link, title, icon, size = 1 }) => {

    return (
        (icon && link) &&
        <MediaBtnComponent
            link={link}
            title={title}
            size={size}
            icon={icon} 
        />
    )
}
export default MediaBtnContainer;