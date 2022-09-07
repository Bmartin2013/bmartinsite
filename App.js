import React from "react";
import 'bulma/css/bulma.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import FullPageSection from "./src/components/FullPageSection";
import HeroBanner from "./src/components/HeroBanner";

const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <FullPageSection children={<HeroBanner/>} />
            <FullPageSection children={<p>Section 2</p>} />
            <FullPageSection children={<p>Section 3</p>} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;