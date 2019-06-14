import React from 'react';
// import connect from 'react-redux';
// import { searchLocation } from '../../actions/business_actions';

class Search extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { query: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchLocation(this.state.query).then(() => this.props.history.push('/businesses'));
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-container">
                    <div className="find-label">Find</div>
                    <input id="search" type="text" placeholder="food, weapons, activities..." />
                    <div className="near-label">Near</div>
                    <input id="searchtwo" type="text" placeholder="The North"  onChange={this.update('query')} />
                    <button type="submit" className="dragon-search" > <img src="https://webstockreview.net/images/clipart-dragon-game-throne-6.png" /></button> 
                </div>
            </form>
        )
    }

}


export default Search
// const mSTP = state => {
//     // let businesses = state.entities.businesses;
//     // return ({ businesses });
//     return state;
// }

// const mDTP = dispatch => ({
//     searchLocation: query => dispatch(searchLocation(query))
// });

// export default connect(null, mDTP)(Search);

