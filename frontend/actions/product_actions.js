import * as APIUtil from '../util/product_api_util'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
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

export const fetchProducts = () => dispatch => {
    return (
        APIUtil.fetchProducts()
            .then((products) => {
                return (dispatch(receiveProducts(products)))
            })
    )
}
