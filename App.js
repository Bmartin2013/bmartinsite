import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
import FullPageSection from "./src/components/FullPageSection";
import HeroBanner from "./src/components/HeroBanner";
import Footer from "./src/components/Footer";
import data  from './src/data/metadata.json'


const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <FullPageSection children={<HeroBanner {...data} />} />
            <FullPageSection children={<p>Section 2</p>} />
            <FullPageSection children={<p>Section 3</p>} />
            <Footer {...data.socialMedia} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;