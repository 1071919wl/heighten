import * as APIUtil from '../util/review_api_util'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

//THUNK ACTION

export const createReview = (review) => dispatch => {
    return(
        APIUtil.createReview(review)
            .then( review => {
                return (dispatch(receiveReview(review)))
            })
    )
}

export const updateReview = (review) => dispatch => {
    return(
        APIUtil.updateReview(review)
            .then( updatedReview => {
                return (dispatch(receiveReview(updatedReview)))
            })
    )
}

export const deleteReview = (reviewId) => dispatch => {
    return(
        APIUtil.deleteReview(reviewId)
            .then( review => {
                return (dispatch(receiveReview(review)))
            })
    )
}