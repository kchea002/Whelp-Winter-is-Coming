import * as BusinessAPI from '../util/business_api_util';
import * as SearchAPI from '../util/search_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


export const receiveBusinesses = (state) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses: state.businesses,
        reviews: state.reviews,
        authors: state.authors
    };
};

export const receiveBusiness = ({ business }) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchBusinesses = () => dispatch => (
    BusinessAPI.fetchBusinesses().then(payload => dispatch(receiveBusinesses(payload)))
)

export const fetchBusiness = (id) => dispatch => (
    BusinessAPI.fetchBusiness(id).then(payload => dispatch(receiveBusiness(payload)))
)

export const searchLocation = query => dispatch => (
    SearchAPI.searchLocation(query).then(payload => dispatch(receiveBusinesses(payload)))
)

