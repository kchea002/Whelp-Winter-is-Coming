import {connect} from 'react-redux';
import { fetchBusinesses, searchLocation } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mSTP = state => {
    let businesses =  Object.values(state.entities.businesses)
        return ({ businesses });
    };

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchLocation: query => dispatch(searchLocation(query))
});

export default connect(mSTP, mDTP)(BusinessIndex);
