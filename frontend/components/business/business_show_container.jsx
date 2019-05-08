import { connect } from 'react-redux';
import BusinessShow from './business_show';
import {fetchBusiness} from '../../actions/business_actions';

const mSTP = (state, ownProps) => {
        
       let businessId = ownProps.match.params.businessId
        let business = state.entities.businesses
        
        return {
            businessId,
            business
        }
};

const mDTP = dispatch => ({
   fetchBusiness: id => dispatch(fetchBusiness(id))
});

const BusinessShowContainer = connect(mSTP, mDTP)(BusinessShow);

export default BusinessShowContainer;
