import { connect } from 'react-redux';
import Category from './category';
import { fetchCategory } from '../../actions/category_actions'


const mapStateToProps = (state, ownProps) => {
    return{
        category: state.entities.categories[ownProps.match.params.id],
        categoryId: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)