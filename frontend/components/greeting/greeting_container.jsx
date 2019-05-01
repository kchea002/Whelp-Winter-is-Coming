import { login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mSTP = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    demo: () => dispatch(login({email: 'jonsnow@westeros.com', password: 'password'}))
});

export default connect(mSTP, mDTP)(Greeting);