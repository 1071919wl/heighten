import { connect } from 'react-redux';
import React from 'react';
import Cart from './cart';


const mapStateToProps = (state, ownProps) => {
    return {
        session: state.session
    }
}



export default connect(mapStateToProps, null)(Cart);