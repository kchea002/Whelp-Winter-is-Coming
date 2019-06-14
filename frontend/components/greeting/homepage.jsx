import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import Locations from './locations';
import Search from './search';
import {connect} from 'react-redux';
import { fetchBusinesses, searchLocation } from '../../actions/business_actions';

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.searchLocation = this.props.searchLocation;
    }
    
    componentDidMount(){
        this.props.fetchBusinesses();
    }


    render(){
        let businesses = Object.values(this.props.businesses);
        if (businesses.length === 0 ) {
            return null;
        }
    
        let hotpie;
        let little;
        let night;

        businesses.forEach( el => {

            switch(el.name) {
                case "Hotpie's Crossroad Inn":
                    hotpie = el.id;
                    break;
                case "Littlefinger's":
                    little = el.id;
                    break;
                case "Night's Watch":
                    night = el.id;
                    break;
            }
           

        });
     
        return (
                <div className="main">
                    <div className="header"> Winter is coming! So stock up and prepare! </div>
                    <div className="homepage">

                        <div className="full-nav">
                            <div className="left-nav">
                            <Link to={'/businesses'}><a className="review">Write a Review</a></Link>
                            </div>
                            <div className="right-nav">
                                <GreetingContainer path='business'/>
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
                        
                        <Search searchLocation={this.searchLocation} history={this.props.history} />


                    </div>
                    
                    <Locations />

                    <div className="homepage-popular"> Popular Businesses </div>
                    <div className="homepage-center">
                        <div className="homepage-pictures">
                            <div className="homepage-pic"> 
                                <Link to={`/biz/${night}`}><img src="https://static1.srcdn.com/wordpress/wp-content/uploads/Jon-Snow-and-the-Nights-Watch-at-Castle-Black.jpg" /></Link>
                                <div className="homepage-pic-info"> 
                                <Link to={`/biz/${night}`}><div className="homepage-pic-title">The Night's Watch </div></Link>
                                    <div className="homepage-pic-words">
                                        <div>Volunteer Work</div>
                                        <div>The North</div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-pic"> 
                                <Link to={`/biz/${hotpie}`}><img src="https://i2.wp.com/www.innatthecrossroads.com/wp-content/uploads/2011/03/Honeyed-Chicken-before.jpg?w=1024" /></Link>
                                <div className="homepage-pic-info">
                                <Link to={`/biz/${hotpie}`}><div className="homepage-pic-title"> Hotpie's Crossroad Inn </div></Link>
                                    <div className="homepage-pic-words">
                                        <div>Food</div>
                                        <div>Riverlands</div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-pic"> 
                            <Link to={`/biz/${little}`}><img src="https://vignette.wikia.nocookie.net/gameofthrones/images/3/30/Interior_Season_5.png/revision/latest?cb=20160227083922" /></Link>
                                <div className="homepage-pic-info">
                                <Link to={`/biz/${little}`}><div className="homepage-pic-title"> Littlefinger's </div></Link>
                                    <div className="homepage-pic-words">
                                        <div>Extracurricular Activities</div>
                                        <div>King's Landing </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="homepage-link"> 
                    <Link to={'/businesses'}>See more businesses</Link>
                </div>
                
            
                </div>        
        )
    }



};

const mSTP = state => {
    let businesses = state.entities.businesses;
    return ({businesses});
}

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchLocation: query => dispatch(searchLocation(query))
});

export default connect(mSTP, mDTP)(Homepage);
