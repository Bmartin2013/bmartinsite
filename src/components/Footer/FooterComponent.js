import React from "react";
import 'bulma/css/bulma.min.css';
import './styles'
import MediaBtn from "../MediaBtn";

const FooterComponent = ({ socialMedia }) => {
  return (
    <p id="sm-container">
      {socialMedia.map(media =>
      (<MediaBtn
        title={media.title}
        link={media.link}
        icon={media.icon}
      />))}
    </p>
  );
}
export default FooterComponent;