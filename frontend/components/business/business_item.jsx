import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component {
   

    render() {
        let business = this.props.business;

        return (
           
            <li className="index-single-container" >
                <img className="index-image" src={this.props.business.photo} />
                <div className="index-info">
                    <div className="index-name">
                        {business.id} 
                        <Link to={`/biz/${business.id}`}><div> {business.name}</div> </Link>
                       
                        <div> {business.price} </div>
                      
                    </div>
                    <div className="index-address">
                        <div>{business.address}</div>    
                        <div>{business.location}</div>
                    </div>
                
                </div>
               
            </li>
        )
        

    }
    
}


export default BusinessItem;