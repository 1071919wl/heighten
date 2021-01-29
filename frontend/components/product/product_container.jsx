import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct } from '../../actions/product_actions';
import { deleteReview } from '../../actions/review_actions';
import { updateReview } from '../../actions/review_actions';
import { removeErrors } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
    let currUser = Object.values(state.entities.users).length ? Object.values(state.entities.users)[0].id : {};
    return{
        product: state.entities.products[ownProps.match.params.id],
        productId: ownProps.match.params.id,
        reviews: state.entities.products[ownProps.match.params.id],
        reviewErrors: state.errors.review,

        // userId: Object.values(state.entities.users)[0].id
        userId: currUser,
        // userId: state.entities.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        updateReview: (review) => dispatch(updateReview(review)),
        removeErrors: () => dispatch(removeErrors())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)