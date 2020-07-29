import React, {useState, useEffect} from 'react';  
import {FadeTransform} from 'react-animation-components';
import '../CSS/RestaurantDetailsComponent.css';

function RestaurantDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);

    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${match.params.id}`, {
            method: 'GET',
            headers: {
                'user-key': 'aec2b703420f669b87588920264f5f3e'
            }
        });
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    };
    return (
        <>
        <FadeTransform in 
            transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <div className="restaurant-car">
            <div className="restaurant-logo-containe">
                <div className="nam">{item.name}</div>
                <img className="restaurant-log" src={item.featured_image} alt="Thumbnail"></img>
            </div>
            <div className="restaurant-detail">
                <div className="info-ro">
                    <div className="field-nam">Cuisines</div>
                    <div className="field-valu">{item.cuisines}</div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Cost For Two</div>
                    <div className="field-valu">{item.average_cost_for_two}</div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Offers</div>
                    <div className="field-valu">{item.offers}</div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Timings</div>
                    <div className="field-valu">{item.timings}</div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Restaurant url</div>
                    <div className="field-valu"><a>{item.url}</a></div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Timings</div>
                    <div className="field-valu">{item.timings}</div>
                </div>
                <div className="info-ro">
                    <div className="field-nam">Contact no</div>
                    <div className="field-valu">{item.phone_numbers}</div>
                </div>
            </div>
        </div>
        </FadeTransform>
        </>
    );
}

export default RestaurantDetail;