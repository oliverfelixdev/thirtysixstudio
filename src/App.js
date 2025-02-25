import React from "react";

import Canvas from "./components/Canvas";
import data from "./data";
import Navigation from "./components/Navigation";
import Introduce from "./components/Introduce";
import Text from "./components/Text";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navigation />
        <Introduce />
        <Text />
        <Footer />
        {/* {data.map((item, index) => (
          <div key={index}>
            {data[0].map((canvasDets, index) => (
              <Canvas key={index} details={canvasDets} />
            ))}
          </div>
        ))} */}
      </div>
    </>
  );
};

export default App;
