import React from 'react';
import Location from './components/SearchComponent';
import RestaurantDeatail from './components/RestrauntDetailsComponent';
import Nav from './components/NavComponent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Zomato() {
  return (
    <BrowserRouter>
      <div className="Zomato">
        <Nav />
        <Switch>
          <Route path='/zomato' exact component={Location}></Route>
          <Route path='/zomato/:id' component={RestaurantDeatail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Zomato;