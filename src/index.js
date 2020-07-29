import * as serviceWorker from './serviceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication(
  'root',
  () => import('./root.app.js'),
  (location) => location.pathname.startsWith('/form')
);

registerApplication(
  'nav', 
  () => import('./Navigation/nav.app.js').then(module => module.navBar),
  () => true
);

registerApplication(
  'zomato-api',
  () => import('./zomato/zomato.app.js'),
  (location) => location.pathname.startsWith('/zomato')
);

start();

serviceWorker.unregister();
