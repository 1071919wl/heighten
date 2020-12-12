import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct } from '../../actions/product_actions'


const mapStateToProps = (state, ownProps) => {
    return{
        product: state.entities.products,
        productId: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)