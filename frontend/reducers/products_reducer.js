import {RECEIVE_PRODUCT} from '../actions/product_actions';


const productsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_PRODUCT:
            let test =  Object.assign({}, newState, { [action.product.id]: action.product });
            return test;
        default:
            return state;    
    }
}

export default productsReducer;