import * as BusinessAPI from '../util/business_api_util';


export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


export const receiveBusinesses = ({ businesses, reviews, authors }) => ({
        type: RECEIVE_BUSINESSES,
        businesses,
        reviews,
        authors
    });




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

