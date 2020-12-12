import { combineReducers } from 'redux';
import userReducer from './users_reducer'
import productsReducer from './products_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  products: productsReducer
});

export default entitiesReducer;