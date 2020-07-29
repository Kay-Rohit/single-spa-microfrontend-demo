import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Zomato from './root.component';

function domElementGetter() {
    return document.getElementById("zomato")
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Zomato,
    domElementGetter,
})

export const bootstrap = [
    reactLifecycles.bootstrap,
  ];
export const mount = [
    reactLifecycles.mount,
  ];
export const unmount = [
    reactLifecycles.unmount,
  ];