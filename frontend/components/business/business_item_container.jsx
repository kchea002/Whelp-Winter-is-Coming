import { connect } from 'react-redux';
import BusinessItem from './business_item';

const mSTP = (state, ownProps) => {
    let businessId = ownProps.business.id
    let business = state.entities.businesses[businessId]
    let reviews = business.reviewIds.map( reviewId => state.entities.reviews[reviewId]);
    
    // let business = ownProps.business

    return { [businessId]: ownProps.business, reviews }
};

const mDTP = dispatch => ({
    
});

export default connect(mSTP, null)(BusinessItem);



