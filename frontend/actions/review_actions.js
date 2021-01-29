import * as APIUtil from '../util/review_api_util'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const removeErrors = () => {
    return {
        type: REMOVE_REVIEW_ERRORS,
    }
}

//THUNK ACTION

export const createReview = (review) => dispatch => {
    return(
        APIUtil.createReview(review)
            .then( review => {
                return (dispatch(receiveReview(review)))
            }, err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const updateReview = (review) => dispatch => {
    return(
        APIUtil.updateReview(review)
            .then( updatedReview => {
                return (dispatch(receiveReview(updatedReview)))
            }, err => dispatch(receiveErrors(err.responseJSON)))
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