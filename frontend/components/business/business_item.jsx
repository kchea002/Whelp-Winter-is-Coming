import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component {
   

    render() {
        let business = this.props.business;
        let reviews = this.props.reviews;

        let review = "";
        if (reviews.length > 0) { review = '"' + reviews[0].body + '"'; }

        return (
           
            <li className="index-single-container" >
                <img className="index-image" src={this.props.business.photo} />
                <div className="index-info">

                        <div className="index-top">
                            <div className="index-length">
                            <div className="index-info-name">
                                <div className="index-name">
                                    {business.id}.&nbsp;<Link to={`/biz/${business.id}`}><div> {business.name}</div> </Link>
                                </div>
                                <div id="price"> {business.price} </div>
                            </div>

                            <div className="index-address">
                                <div>{business.address}</div>
                                <div>{business.location}</div>
                            </div>
                        </div>

                        <div >
                                <p className="index-review-area"> {review} </p>
                        </div>
                    </div>


                </div>
               
            </li>
        )
        

    }
    
}


export default BusinessItem;