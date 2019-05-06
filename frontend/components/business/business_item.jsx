import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component {
   

    render() {
        
        return (
           
            <li className="index-single-container" >
                <img className="index-image" src={this.props.business.photo} />
                <div className="index-info">
                    <div className="index-name">
                        {this.props.business.id}.

                        {this.props.business.name}
                    </div>
                    <div className="index-address">
                        {this.props.business.address}
                    </div>
                
                </div>
               
            </li>
        )
        

    }
    
}


export default BusinessItem;