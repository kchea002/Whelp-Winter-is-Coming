import { combineReducers } from 'redux';
import sessErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessErrorsReducer
});

export default errorsReducer;