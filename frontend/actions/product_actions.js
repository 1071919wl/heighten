import * as APIUtil from '../util/product_api_util'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

// THUNK ACTION

export const fetchProduct = (productId) => dispatch => {
    return(
        APIUtil.fetchProduct(productId)
            .then(product => {
                return (dispatch(receiveProduct(product)))
            })
    )
}
