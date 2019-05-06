import React from 'react';
import BusinessContainer from './business_index_container';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }


    render(){
        

        return (
            <div>
                <div className="login-header-index">
                    <Link to={'/'}>
                        <img className="login-logo" src="https://i.imgur.com/O22tB8P.png" />
                    </Link>
                </div>
                <div className="index-tab-bar"></div>
                <div className="index-title-bar"> Browsing businesses in Westeros</div>
                <ul>
                    {this.props.businesses.map(business => {
                        return <BusinessItemContainer key={business.id} business={business} /> 
                    })}
                </ul>  
            </div>

        )     
    }
}
    

export default BusinessIndex;
