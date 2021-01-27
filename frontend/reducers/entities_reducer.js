import { combineReducers } from 'redux';
import userReducer from './users_reducer'
import productsReducer from './products_reducer';
import categoriesReducer from './categories_reducer';
// import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  products: productsReducer,
  categories: categoriesReducer,
  // reviews: reviewsReducer
});

export default entitiesReducer;