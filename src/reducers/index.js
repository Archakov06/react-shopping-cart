import { combineReducers } from 'redux';

import books from './books';
import cart from './cart';
import filter from './filter';

export default combineReducers({
  books,
  cart,
  filter,
});
