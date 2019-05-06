import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component {
   

    render() {
        debugger
        return (
            <div>
                <p>{this.props.business.name}</p>
            </div>
        )
        

    }
    
}


export default BusinessItem;