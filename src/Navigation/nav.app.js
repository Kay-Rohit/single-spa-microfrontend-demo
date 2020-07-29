import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Nav from './root.component.js';

function domElementGetter() {
  return document.getElementById("nav")
}
export const navBar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Nav,
  domElementGetter,
})