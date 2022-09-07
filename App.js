import React from "react";
import 'bulma/css/bulma.min.css';
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => {
    return (
        <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}
export default App;