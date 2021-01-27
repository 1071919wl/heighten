import { connect } from 'react-redux';
import Review from './review';
import { createReview } from '../../actions/review_actions'


const mapStateToProps = (state) => {
    return {
        userId: Object.values(state.entities.users)[0].id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)