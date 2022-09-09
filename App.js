import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
import SectionWrapper from "./src/components/SectionWrapper";
import HeroBanner from "./src/components/HeroBanner";
// Should I load all the data at the beginning of the app or whenever I need it?
import { title, subtitle } from './src/data/metadata.json'


const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <SectionWrapper children={<HeroBanner title={title} subtitle={subtitle} />} />
            <SectionWrapper children={<p>Section 2</p>} />
            <SectionWrapper children={<p>Section 3</p>} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;