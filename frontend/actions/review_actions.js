import * as APIutil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author
});

export const removeReview = payload => ({
    type: REMOVE_REVIEW,
    review: payload.review
});

export const createReview = review => dispatch => (
    APIutil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    APIutil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = id => dispatch => (
    APIutil.deleteReview(id)
        .then(payload => dispatch(removeReview(payload)))
);