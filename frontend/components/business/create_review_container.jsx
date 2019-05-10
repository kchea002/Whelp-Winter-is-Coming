import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
    businesses: state.entities.businesses,
    currentUser: state.entities.users[state.session.id],
    review: { body: '', rating: 0 }
});

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review)),
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);