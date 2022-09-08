import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
import FullPageSection from "./src/components/FullPageSection";
import HeroBanner from "./src/components/HeroBanner";
import Icon from '@mdi/react'
import { mdiLinkedin, mdiGithub, mdiEmailOpenMultipleOutline,mdiGoogleDrive  } from '@mdi/js';

const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <FullPageSection children={<HeroBanner />} />
            <FullPageSection children={<p>Section 2</p>} />
            <FullPageSection children={<p>Section 3</p>} />
            <footer id="footer">
              <div id="sm-container">
                <span>
                  <Icon path={mdiLinkedin}
                    title="User Profile"
                    size={1} />
                </span>
                <span>
                  <Icon path={mdiGithub}
                    title="User Profile"
                    size={1} />
                </span>
                <span>
                  <Icon path={mdiEmailOpenMultipleOutline}
                    title="User Profile"
                    size={1} />
                </span>
                <span>
                  <Icon path={mdiGoogleDrive}
                    title="User Profile"
                    size={1} />
                </span>

                {/* <span class="icon sm-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </span>
                <span class="icon sm-icon">
                  <FontAwesomeIcon icon={faBlog} size="2x" />
                </span>

                <span class="icon sm-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </span> */}
              </div>
            </footer>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;