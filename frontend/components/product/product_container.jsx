import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct } from '../../actions/product_actions';
import { deleteReview } from '../../actions/review_actions';
import { updateReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
    return{
        product: state.entities.products[ownProps.match.params.id],
        productId: ownProps.match.params.id,
        reviews: state.entities.products[ownProps.match.params.id],

        userId: Object.values(state.entities.users)[0].id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        updateReview: (review) => dispatch(updateReview(review))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)