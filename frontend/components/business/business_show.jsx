import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import ReviewsContainer from './reviews_container';


class BusinessShow extends React.Component {
    constructor(props) {
        super(props);

    }
    

    componentDidMount(){
        this.props.fetchBusiness(this.props.businessId).then( 
            (business) => this.setState({business: business})
        );
        
        
    }

    render() {
        console.log("render")
        
        let business = this.props.business
        
        // [this.props.match.params.businessId]
        if (!business) return null;
        console.log(business)

        let businesspictures = null;
        if (business.pictures) {
            businesspictures = <>  
                <img className="show-image-container" src={business.pictures[0]} />
                <img className="show-image-container" src={business.pictures[1]} /> 
            </>
        } 

    
        const reviews = this.props.reviews.map(review => {
            return (
                <ReviewsContainer key={review.id} review={review} business={this.props.business} />
            )
        })

        return (
            <div>
                
            
              
                <div className="login-header-index">
                    <Link to={'/'}>
                        <img className="login-logo" src="https://i.imgur.com/O22tB8P.png" />
                    </Link>
                </div>
                <div className="index-tab-bar"></div>
                <div className="show-title">
                    <div className="show-title-name">{business.name}</div>
                    <div> CROWN PLACEHOLDER: 8 reviews</div>
                    <div>{business.price}</div>
                </div>
                <div className="show-pictures">
                    <div className="show-info-container">
                        <img className="show-map" src="https://i2.wp.com/www.maproomblog.com/xq/wp-content/uploads/2019/03/shadrach-westeros.jpg?resize=840%2C449&ssl=1" />
                        <div className="show-biz-info">
                            <div><img id="icn" src="http://simpleicon.com/wp-content/uploads/castle.png"/>  {business.address}</div>
                            <div>{business.location}</div>
                        </div>
                    </div>
                    <div >
                        <img className="show-image-container" src={business.photo} />
                        {businesspictures}
                    </div>
                </div>

                <div className="show-review-div">
                  
                    <div>
                        <div className="reviews-header">
                            <div className="rec-reviews">Recommended Reviews </div>
                            <span className="name-reviews"> for {this.props.business.name}</span>  
                        </div>
                        
                        <ul>
                            {reviews}
                        </ul>
                    </div>
                    
                    <Sidebar />
                </div>
            </div>
        )
    }

}

export default BusinessShow;