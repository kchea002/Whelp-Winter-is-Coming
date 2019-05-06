import { connect } from 'react-redux';
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => {
        debugger
        businessId = ownProps.match.params.businessId

        return {
            businessId
        }
};

const mDTP = dispatch => ({
   
});

const BusinessShowContainer = connect(mSTP, mDTP)(BusinessShow);

export default BusinessShowContainer;