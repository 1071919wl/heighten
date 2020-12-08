import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root');
    
    //! testing
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    //! testing

    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<h1>Testing Root</h1>, root);
});
