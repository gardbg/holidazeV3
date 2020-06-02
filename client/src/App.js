import React from 'react';

import NavBar from './components/navbar';
import Footer from './components/footer';

import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

export default function App(props) {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div>
          {props.children}
        </div>
      </div>
      <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{}}
      ToggledStyle={{}}
    />
      <Footer />
    </>
  )
}