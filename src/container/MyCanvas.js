// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"


import React, { useRef, useEffect, useState, Suspense, Component } from "react";
import "./App.scss";

//Components
import { Section } from "../components/section";


// R3F
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader, OrbitControls } from "drei";


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

class MyCanvas extends Component {
  render() {
    return (
    

          <>
          
              <Canvas  colorManagement camera={{ position: [30, 15, 110], fov: 73 }}>
                <Lights />
                <Suspense fallback={null} >
                  <HTMLContent id="myModel" />
                </Suspense>
                <OrbitControls />
              </Canvas>
         
          </>
      
    );
  }
} export default MyCanvas; 