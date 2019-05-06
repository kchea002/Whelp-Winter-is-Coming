import { connect } from 'react-redux';
import BusinessItem from './business_item';

const mSTP = (state, ownProps) => {
    let businessId = ownProps.business.id
    let business = state.entities.businesses[businessId]
    
    // let business = ownProps.business

    return { [businessId]: ownProps.business }
};

const mDTP = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(mSTP, null)(BusinessItem);



