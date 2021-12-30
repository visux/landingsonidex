import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import ParticlesBg from "particles-bg";
import { AwesomeButton } from "react-awesome-button";
import Code from "./components/Code.jsx";
import Icons from "./components/Icons.jsx";

import "react-awesome-button/dist/styles.css";
import "./App.css";

import image1 from "./assets/01.jpeg";
import image2 from "./assets/02.jpeg";
import image3 from "./assets/03.jpeg";
import image4 from "./assets/04.jpeg";
import image5 from "./assets/05.jpeg";



let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.6, 0],
  scale: [.1, 0.9],
  
  position: "all",
  //color: ["random", "#ff0000"],
  cross: "dead",
  random: 10

  //config={config} style={{ height: 500 }} 
};


/*<div className="top"></div> */
const App = () => (
  <div className="main">
    

    <div className="container">
      <Parallax strength={500}>
        <ParticlesBg config={config} color="#00ff73" type="cobweb" bg={true}/>
        <div style={{ height: window.outerHeight }}  >
          <div className="boxs header">
            <div><h1 className="title">SoniDEX</h1></div>
            <h4 className="introduction">
             You can Swap and Trade assets instantly
            </h4>
            <div className="buttons">
              <a href="https://exchange.sonikchain.com">
                <AwesomeButton
                  size="medium"
                  type="secondary"
                >
                  Start
                </AwesomeButton> 
              </a> 
              <div className="space"></div>
              <a href="#">
                <AwesomeButton
                  size="medium"
                  type="primary"
                >
                  Learn More
                </AwesomeButton>
              </a> 
            </div>
            <h4 className="title2">Exchange by Sonikchain</h4>
          </div>
        </div>
      </Parallax>

   
    </div>
   
   

  </div>
);

/*<div className="footer">® 2021 Sonikchain | All right reserved.</div> */
export default App;
