import React from 'react';
import Restaurant from './oneRestaurantComponent';
import {Link} from 'react-router-dom';
import '../CSS/RestaurantComponent.css';
import { FadeTransform } from "react-animation-components";

const Restaurants = (props)=> {
    let restaurants = props.restaurants;
    restaurants = restaurants.map((item)=>{
        return (
            <>
            <FadeTransform
                in
                transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
                <Link to={`/zomato/${item.restaurant.id}`}>
                    <Restaurant key={item.restaurant.id} details={item.restaurant}/>
                </Link>
            </FadeTransform>
            </>
        );
    });
    if (restaurants.length){
        return (
            <div className="restaurants-container">
                {restaurants}
            </div>
        );
    } else if (props.userSearch){
        return (
            <div className="restaurants-container">
                Sorry there are no restaurants in your area!
            </div>
        );
    } else{
        return (
            <div className="restaurants-container">
            </div>
        );
    }
}
export default Restaurants;