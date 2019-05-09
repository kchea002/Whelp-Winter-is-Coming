import { connect } from 'react-redux';
import BusinessShow from './business_show';
import {fetchBusiness} from '../../actions/business_actions';

const mSTP = (state, ownProps) => {
        
       let businessId = ownProps.match.params.businessId
        let business = state.entities.businesses[businessId]
        
        let reviews = business.reviewIds.map( rid => state.entities.reviews[rid]);
        
    
        return {
            businessId,
            business,
            reviews
        };
};

const mDTP = dispatch => ({
   fetchBusiness: id => dispatch(fetchBusiness(id))
});

const BusinessShowContainer = connect(mSTP, mDTP)(BusinessShow);

export default BusinessShowContainer;
