import {RECEIVE_PRODUCT} from '../actions/product_actions';


const productsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_PRODUCT:
            return Object.assign({}, newState, { [action.product.id]: action.product });
        default:
            return state;    
    }
}

export default productsReducer;