import React from "react";
import 'bulma/css/bulma.min.css';
import './src/styles/styles.css'
import ReactFullpage from '@fullpage/react-fullpage';
// TODO: It seems that I can add a dynamic import or something similar.
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