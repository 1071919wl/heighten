import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            // newState[action.currentUser.id] = action.currentUser;
            // dont think above code is working
            // return newState;
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;    
    }
};

export default usersReducer;