import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
import SectionWrapper from "./src/components/SectionWrapper";
import Home from "./src/sections/Home";
import AboutMe from "./src/sections/AboutMe";


const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Home/>
            <AboutMe/>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;