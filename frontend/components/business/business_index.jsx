import React from 'react';
import BusinessContainer from './business_index_container';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';
import GreetingContainer from '../greeting/greeting_container';
import Minisearch from './mini_search';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);

        this.searchLocation = this.props.searchLocation;
    }

    render(){
    
        const { businesses, history } = this.props; 
        let allBusinesses = businesses.map((business, idx) => {
            return (
                <BusinessItemContainer 
                    key={business.id} 
                    business={business} 
                />
            )
        });

        return (
            <div className="index-main-body">
                <div className="login-header-index">
                    <div className="login-header-mid">
                        <Link to={'/'}>
                            <img className="login-logo" 
                                src="https://i.imgur.com/O22tB8P.png" />
                        </Link>
                        <Minisearch 
                            searchLocation={this.searchLocation} 
                            history={history} />
                    </div>
                    <div className="right-nav-three">
                        <GreetingContainer />
                    </div>
                </div>
                <div className="index-tab-bar"></div>
                <div className="index-title-bar"> 
                    <div>
                        <p> Browsing businesses in Westeros</p> 
                    </div>
                </div>
                <div className="index-item-container" >
                    <ul>
                        {allBusinesses}
                    </ul> 
                    <img id="map" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41cbc76b-d7cc-48de-aa20-38a58b895935/dal295u-e59f3044-9052-4c4d-a529-23b140982c70.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxY2JjNzZiLWQ3Y2MtNDhkZS1hYTIwLTM4YTU4Yjg5NTkzNVwvZGFsMjk1dS1lNTlmMzA0NC05MDUyLTRjNGQtYTUyOS0yM2IxNDA5ODJjNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U6gYZ37gHnrL75Gl00G_SsACGNh3tp5QkOl9VqGHXwk" />
                </div>
                <div>
                    
                </div>
              
            </div>

        )     
    }
}
    

export default BusinessIndex;
