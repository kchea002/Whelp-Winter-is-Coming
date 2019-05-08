import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';


class BusinessShow extends React.Component {
    constructor(props) {
        super(props);

    }
    

    componentDidMount(){
        this.props.fetchBusiness(this.props.businessId).then( 
            (business) => this.setState({business: business})
        )
        console.log("componentdidmount")
    }

    render() {
        console.log("render")
        
        let business = this.props.business[this.props.match.params.businessId]
        if (!business) return null;
        console.log(business)

        let businesspictures = null;
        if (business.pictures) {
            businesspictures = <>  
                <img className="show-image-container" src={business.pictures[0]} />
                <img className="show-image-container" src={business.pictures[1]} /> 
            </>
        } 

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
                        <div className="show-map">Map PLACEHOLDER</div>
                        <div className="show-biz-info">
                            <div>{business.address}</div>
                            <div>{business.location}</div>
                        </div>
                    </div>
                    <div >
                        <img className="show-image-container" src={business.photo} />
                        {businesspictures}
                    </div>
                </div>

                <div className="show-review-div">
                    <Sidebar />
                </div>
            </div>
        )
    }

}

export default BusinessShow;