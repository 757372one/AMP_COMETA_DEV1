import './App.scss';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wormhole } from "./components/wormhole/wormhole";
import { Header } from './components/section/header';
import { Cosmosapiens } from './components/NFT/cosmosapiens';
import { Token } from './components/section/token';
import { Game } from './components/section/game';
import { Footer } from './components/section/footer';
import { Landing } from './components/section/landing';
import { Roadmap } from './components/section/roadmap';
import { PODs } from './components/section/PODs';
import { Meme } from './components/section/meme';
import { Galaxy } from './components/galaxy/galaxy';
import { Html } from '@react-three/drei';

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // camera.position.z = 7 + Math.sin(clock.getElapsedTime()) * 2
    // camera.position.y = 2 + Math.sin(clock.getElapsedTime()) * 2
    // camera.rotation.y = Math.sin(clock.getElapsedTime()) * 0.25
  })
  return null
}

const HTMLContent = () => {
  return(
        <group position={[0,-4,0]}>
          <mesh position={[0,0,0]}>
          </mesh>
          <Html center>
            <div className='drei-container'>
              <h3>
                wormhole_78c
              </h3>
            </div>
          </Html>
        </group>
  );
};
 
function Main() {

  useEffect(() => {

    function handleScrollYChange() {
      // This one makes the camera move in and out
      console.log("scroll:");
    }

    window.addEventListener("scroll", handleScrollYChange, true);

    return () => {
        window.removeEventListener("scroll", handleScrollYChange);
      };

  }, []);

  return (
    <div className='screen'>
      <div className='main'>
          <Header />
          <Landing />
          <Cosmosapiens />
          <Token />
          <Roadmap />
          <Game />
          <PODs />
          <Meme />
          <Footer />
      </div>
      <Footer />
      <div className='canvas darkBg'>
        <Canvas colorManagement camera={{position:[0,1,6], fov: 120}} >
          <Suspense fallback={null}>
            <HTMLContent />
            <Wormhole />
            <Dolly />
            <Galaxy />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
export default Main;