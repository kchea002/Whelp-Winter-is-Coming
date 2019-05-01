import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

const Homepage = () => {

    return (
            <div className="main">
                <div className="header"> Use our website before the White walkers come! </div>
                <div className="homepage">

                    <div className="full-nav">
                        <div className="left-nav">
                            <a href="" className="review">Write a Review</a>
                        </div>
                        <div className="right-nav">
                            <GreetingContainer />
                        </div>
                        
                    </div>

                    <div className="homepage-logo">
                        <img src="https://vivalajaiba.com/wp-content/uploads/2018/07/yelp-logo.png" />

                    </div>

                    <div className="input_text_wrapper">
                        <label className="non-selector"> Find </label>
                        <input id="search" type="text" placeholder="dragons, white walkers, dragonglass..." />
                    </div>


                </div>

            </div>

        
    )
};

export default Homepage;