// export const fetchReview = (reviewId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/reviews/${reviewId}`
//     })
// };


export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/reviews/`,
        data: {review}
    })
};

//! for console ajax testing
// let review = {
//     'product_id': 20,
//     'reviewer': 'Tester2',
//     'score': 3,
//     'user_id': 2,
//     'review': 'Cool product but a bit pricey for what it is imo.'
// }
// $.ajax({ 'method': 'POST', 'url': `/api/reviews/`, 'data': {review} })
//! for console ajax testing

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
};



export const deleteReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
};

//! for console ajax testing
// $.ajax({ 'method': 'DELETE', 'url': `/api/reviews/4` })
//! for console ajax testing