import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import Locations from './locations';

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
                    
                 

                    <div className="search-container">
                        <div className="find-label">Find</div>
                        <input id="search" type="text" placeholder="food, weapons, activities..." />
                        <div className="near-label">Near</div>
                        <input id="searchtwo" type="text" placeholder="The North" />
                    <div className="dragon-search"> <img src="https://webstockreview.net/images/clipart-dragon-game-throne-6.png" /></div>
                    </div>


                </div>
                
                <Locations />

                <div className="homepage-popular"> Popular Businesses </div>
                <div className="homepage-pictures">
                    <div className="homepage-pic"> 
                        <Link to={'/biz/33'}><img src="https://static1.srcdn.com/wordpress/wp-content/uploads/Jon-Snow-and-the-Nights-Watch-at-Castle-Black.jpg" /></Link>
                        <div className="homepage-pic-info"> 
                            <Link to={'/biz/33'}><div className="homepage-pic-title">The Night's Watch </div></Link>
                            <div className="homepage-pic-words">
                                <div>Volunteer Work</div>
                                <div>The North</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-pic"> 
                        <Link to={'/biz/31'}><img src="https://i2.wp.com/www.innatthecrossroads.com/wp-content/uploads/2011/03/Honeyed-Chicken-before.jpg?w=1024" /></Link>
                        <div className="homepage-pic-info">
                            <Link to={'/biz/31'}><div className="homepage-pic-title"> Hotpie's Crossroad Inn </div></Link>
                            <div className="homepage-pic-words">
                                <div>Food</div>
                                <div>Riverlands</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-pic"> 
                    <Link to={'/biz/32'}><img src="https://vignette.wikia.nocookie.net/gameofthrones/images/3/30/Interior_Season_5.png/revision/latest?cb=20160227083922" /></Link>
                        <div className="homepage-pic-info">
                        <Link to={'/biz/32'}><div className="homepage-pic-title"> Littlefinger's </div></Link>
                            <div className="homepage-pic-words">
                                <div>Extracurricular Activities</div>
                                <div>King's Landing </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
       

            <div className="homepage-link"> 
                <Link to={'/businesses'}>See more businesses</Link>
            </div>
            
            <video width="320" height="240" autoPlay muted controls>
                <source src="https://www.youtube.com/watch?v=DIgQc_XwHHM" type="video/mp4" />
                </video>
            

            </div>        
    )
};

export default Homepage;