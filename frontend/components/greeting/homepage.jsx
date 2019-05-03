import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

const Homepage = () => {

    return (
            <div className="main">
                <div className="header"> Winter is coming! So stock up and prepare! </div>
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
                        <div className="logo1">
                        <img src="https://i.imgur.com/O22tB8P.png" />
                        </div>
                        <div className="logo2">
                        <img src="http://www.pngall.com/wp-content/uploads/2016/05/Game-of-Thrones-Logo.png" />
                        </div>
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