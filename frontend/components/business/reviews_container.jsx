import { connect } from 'react-redux';
import ReviewItem from './review_item';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
        
    return (
    {currentUser: state.entities.users[state.session.id],
    author: state.entities.users[ownProps.review.user_id]}
    )
};

const mapDispatchToProps = dispatch => ({
    deleteReview: id => dispatch(deleteReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);