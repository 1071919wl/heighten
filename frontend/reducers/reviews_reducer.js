import {RECEIVE_REVIEW} from '../actions/review_actions';



const reviewsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_REVIEW:
            let test =  Object.assign({}, newState, { [action.review.id]: action.review });
            return test;
        default:
            return state;    
    }
}

export default reviewsReducer;