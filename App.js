import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
import FullPageSection from "./src/components/FullPageSection";
import HeroBanner from "./src/components/HeroBanner";
// Should I load all the data at the beginning of the app or whenever I need it?
import { title, subtitle } from './src/data/metadata.json'


const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <FullPageSection children={<HeroBanner title={title} subtitle={subtitle} />} />
            <FullPageSection children={<p>Section 2</p>} />
            <FullPageSection children={<p>Section 3</p>} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;