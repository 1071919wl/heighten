import {RECEIVE_CATEGORY} from '../actions/category_actions';


const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_CATEGORY:
            return Object.assign({}, state, { [action.category.id]: action.category });
        default:
            return state;
    }
}

export default categoriesReducer;