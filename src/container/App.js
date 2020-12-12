// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"


import React, { useRef, useEffect, useState, Suspense, Component } from "react";
import "./App.scss";
import "./MyCanvas";
//Error
import ErrorBoundry from '../components/ErrorBoundry';

//Components
import { Section } from "../components/section";
import Particles from '../components/Particles';
import Head from '../components/Header';
// Page State
import state from "../components/state";

// R3F
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader, OrbitControls } from "drei";

// React Spring
import { a, useTransition } from "@react-spring/web";
import MyCanvas from "./MyCanvas";

const Model5 = () => {
  const gltf = useGLTFLoader('/scene.gltf', true);
  return <primitive object={gltf.scene} dispose={null} />;
}


function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}
class App extends Component {
  render() {
    return (
      <>
      
        <div>
          <div className='headArea' style={{ position: 'relative', top: 0 }}>
            <Head />
          </div>
          
        </div>
        <div className='scrollArea '>
          <div className='particleArea' style={{ position: 'relative', top: 1 }} >
                                        
       
                <Particles  > <OrbitControls />
                  </Particles>
               
               
               
       
          </div> 
          <div style={{ height: `${state.pages * 80}vh` }, { width: `${state.pages * 90}vw` }}>
          </div>
          <div className='container' style={{ position: 'relative', bottom: 70 }}>
            <h1 className='title'>FULL STACK WEB DEVELOPER 
              <div id='mouse'></div>
            </h1>
            
          </div>
          
        </div>
        
        
            <Loader />
 
      </>
    );
  }
} export default App; 
