import { connect } from 'react-redux';
import React from 'react';
import Search from './search';
import { fetchProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        products: Object.values(state.entities.products),
        product: state.entities.products[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);