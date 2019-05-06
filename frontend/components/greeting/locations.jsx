import { Link } from 'react-router-dom';
import React from 'react';

const Locations = () => {
    return (
        <div className="location-center">
            <div className="westeros"> Yelp Westeros </div>
            <div className="location-homepage">
                <Link to="/businesses"><div>The North</div></Link>
                <Link to="/businesses"><div>King's Landing</div></Link>
                <Link to="/businesses"><div>Dorne</div></Link>
                <Link to="/businesses"><div>Iron Islands</div></Link>
                <Link to="/businesses"><div>Westerlands</div></Link>
                <Link to="/businesses"><div>Stormlands</div></Link>
                <Link to="/businesses"><div>The Reach</div></Link>
                <Link to="/businesses"><div>The Vale</div></Link>
            </div>
        </div>
    )
    
}

export default Locations;

