import * as APIUtil from '../util/category_api_util'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategory = (category) => {
    return {
        type: RECEIVE_CATEGORY,
        category
    }
}

// THUNK ACTION

export const fetchCategory = (categoryId) => dispatch => {
    return(
        APIUtil.fetchCategory(categoryId)
            .then( (category) => {
                return (dispatch(receiveCategory(category)))
            })
    )            
}