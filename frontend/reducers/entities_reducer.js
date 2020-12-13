import { combineReducers } from 'redux';
import userReducer from './users_reducer'
import productsReducer from './products_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  products: productsReducer,
  categories: categoriesReducer
});

export default entitiesReducer;