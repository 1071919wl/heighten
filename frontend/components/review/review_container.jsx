import { connect } from 'react-redux';
import Review from './review';
import { createReview } from '../../actions/review_actions';



const mapStateToProps = (state) => {
    let currUser = Object.values(state.entities.users).length ? Object.values(state.entities.users)[0].id : {};
    return {
        // userId: Object.values(state.entities.users)[0].id
        userId: currUser,
        // userId: state.entities.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)