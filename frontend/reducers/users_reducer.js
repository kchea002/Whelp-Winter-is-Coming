import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_REVIEW:
            return merge({}, oldState, { [action.author.id]: action.author });
        case RECEIVE_BUSINESS:
            return merge({}, oldState, action.authors);
        case RECEIVE_BUSINESSES:
            return merge({}, oldState, action.authors);
        default:
            return oldState;
    }
};

export default usersReducer;
