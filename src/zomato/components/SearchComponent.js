import React, {Component} from 'react';
import axios from 'axios';
import Restaurants from './RestaurantComponent';
import RestaurantDetail from './RestrauntDetailsComponent';
import '../CSS/SearchComponent.css';
import {Switch, Route} from 'react-router-dom';

class Location extends Component{
    constructor(props){
        super(props);
        this.state = ({
            latitude: undefined,
            longitude: undefined,
            restaurants: [],
            userSearch: false,
            button_text: 'FIND RESTAURANTS'
        });
    }

    componentWillUnmount(){
        this.setState({
            button_text: 'FIND RESTAURANTS'
        })
    }

    wrapper = () => {
        this.handleLocation();
        this.handleRestaurantSearch();
    }
    
    handleLocation = ()=>{
        let current = this;
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
               current.setState({
                   latitude: position.coords.latitude,
                   longitude: position.coords.longitude,
                   button_text: 'Finding Restaurants...'
               });
               console.log(current.state.latitude, current.state.longitude)
            });
        } else{
            alert('Geolocation is not supported for your browser. Please enter the location manually');
        }
    }
    handleRestaurantSearch = ()=>{
        let lat = this.state.latitude,
            lon = this.state.longitude,
            cuisines = +document.getElementById('cuisine').value,
            comp  = this;
        axios.get('https://developers.zomato.com/api/v2.1/search', { 
            params: { 
                    lat,
                    lon,
                    cuisines,
                    sort: 'rating',
                    radius: 10000
             },
            headers: {'user-key': 'aec2b703420f669b87588920264f5f3e'}
            }).then(function(response){
            comp.setState({
                restaurants: response.data.restaurants,
                button_text: 'FIND RESTAURANTS'
            });
        });
    }
    render(){
        return (
            <>
            <div className="location-conatiner">
                <input type="text" id="cuisine" className="cuisine-input" placeholder="Enter Cuisine or Click on Find Restaurants"/>
                <button onClick = {this.wrapper} className="search-button">{this.state.button_text}</button>
                <br/>
                <hr className="divider"/>
                <Restaurants restaurants={this.state.restaurants}/>
            </div>
            <Switch>
                <Route path="zomato/:id" component={RestaurantDetail}></Route>
            </Switch>
            </>
        );
    }
}
export default Location;