import React, { lazy, Suspense } from "react";
import 'bulma/css/bulma.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from "./src/sections/Home";
const AboutMe = lazy(() => import("./src/sections/AboutMe"));


const App = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Home />
            <Suspense fallback={<h1>Loading...</h1>}>
              <AboutMe />
            </Suspense>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
export default App;