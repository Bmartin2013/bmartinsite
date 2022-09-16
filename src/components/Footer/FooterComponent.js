import React from "react";
import 'bulma/css/bulma.min.css';
import './styles'
import SocialMediaBtn from "../SocialMediaBtn";

const FooterComponent = ({ socialMedia }) => {
  return (
    <div id="sm-container">
      {socialMedia.map(media =>
      (<SocialMediaBtn
        title={media.title}
        link={media.link}
        icon={media.icon}
      />))}
    </div>
  );
}
export default FooterComponent;