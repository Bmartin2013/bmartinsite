import React from "react";
import 'bulma/css/bulma.min.css';
import './styles'
import FooterBtn from "./FooterBtn";

// TODO: Is there any way to automatically add buttons from metadata without adding a new component
const FooterComponent = ({ socialMedia }) => {
  return (
    <div id="sm-container">
      {socialMedia.map(media =>
      (<FooterBtn
        title={media.title}
        link={media.link}
        name={media.name}
      />))}
    </div>
  );
}
export default FooterComponent;