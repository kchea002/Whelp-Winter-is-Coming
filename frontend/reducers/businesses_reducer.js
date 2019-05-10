import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

import merge from 'lodash/merge';

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return merge({}, oldState, { [action.business.id]: action.business });
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            if (!newState[review.business_id].reviewIds.includes(review.id)) {
                newState[review.business_id].reviewIds.push(review.id);
            }
            newState[review.business_id].average_rating = average_rating;
            return newState;
        case REMOVE_REVIEW:
            const idx = newState[action.review.business_id].reviewIds.indexOf(action.review.id);
            if (idx > -1) {
                newState[action.review.business_id].reviewIds.splice(idx, 1);
            }
            return newState;
        default:
            return oldState;
    }
};

export default businessesReducer;