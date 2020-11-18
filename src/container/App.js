import React, { useRef, useEffect, useState, Suspense, Component } from "react";
import "./App.scss";
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

const Model5 = () => {
  const gltf = useGLTFLoader('/scene.gltf', true);
  return <primitive object={gltf.scene} dispose={null} />;
}


const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};
const HTMLContent = () => {
  var ref = useRef();
  useFrame(() => (ref.current.rotation.y -= 0.00001, ref.current.rotation.x += 0.00001, ref.current.rotation.z += 0.00005));
  return (
    <Section factor={2} offset={1}>
      <group position={[0, 210, 0]}>
        <mesh ref={ref} position={[-150, -10, 140]}>
          <Model5 />
        </mesh>
      <Html fullscreen>
        <div style={{color: 'white', textAlign:'center', marginBottom:'50%'}}> 
          <h2> Criação de experiência 3D</h2>
        </div>
      </Html>
      </group>
    </Section>
  );
};
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
          <div style={{ height: `${state.pages * 50}vh` }, { width: `${state.pages * 90}vw` }}>
          </div>
        </div>
        <div className='scrollArea '>
          <div className='particleArea' style={{ position: 'relative', top: 0 }}>
            <Particles />
          </div>
          <div style={{ height: `${state.pages * 50}vh` }, { width: `${state.pages * 90}vw` }}>
          </div>
          <div className='container' style={{ position: 'relative', bottom: 70 }}>
            <h1 className='title'>FULL STACK WEB DEVELOPER 
              <div id='mouse'></div>
            </h1>
            
          </div>
          
        </div>

        <>

          <>
            <ErrorBoundry>
              <Canvas  colorManagement camera={{ position: [30, 15, 110], fov: 73 }}>
                <Lights />
                <Suspense fallback={null} >
                  <HTMLContent id="myModel" />
                </Suspense>
                <OrbitControls />
                
              </Canvas>
            </ErrorBoundry>
            <Loader />
          </>
        </>
      </>
    );
  }
} export default App; 
