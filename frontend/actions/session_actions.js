import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

// THUNK ACTION


export const signup = (user) => dispatch => {
    return (
        APIUtil.signup(user)
            .then(currentUser => dispatch(receiveCurrentUser(currentUser))),
                err => (dispatch(receiveErrors(err.responseJSON))) 
    )
}

export const login = (user) => dispatch => {
    return (
        APIUtil.login(user)
            .then(currentUser => dispatch(receiveCurrentUser(currentUser))),
                err => (dispatch(receiveErrors(err.responseJSON)))        //! test what this code is doing
    )
}

export const logout = () => dispatch => {
    return (
        APIUtil.logout()
            .then(() => dispatch(logoutCurrentUser(currentUser))),
                err => (dispatch(receiveErrors(err.responseJSON)))         //! test what this code is doing
    )
}