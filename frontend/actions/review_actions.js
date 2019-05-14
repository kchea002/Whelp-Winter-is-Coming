import * as APIutil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = ({ review, author }) => ({
    type: RECEIVE_REVIEW,
    review: review,
    author: author
});

export const removeReview = res => ({
    type: REMOVE_REVIEW,
    review: res.review
});

export const createReview = review => dispatch => (
    APIutil.createReview(review).then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    APIutil.updateReview(review).then(review => dispatch(receiveReview(review)))
);

export const deleteReview = id => dispatch => (
    APIutil.deleteReview(id).then(res => dispatch(removeReview(res)))
);