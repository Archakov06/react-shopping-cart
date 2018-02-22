import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App.jsx';

import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import find from 'lodash/find';
import filter from 'lodash/filter';

import * as books from '../actions/books';
import * as cart from '../actions/cart';

const filterBooks = (type, searchQuery, books) => {
  window.orderBy = orderBy;
  window.books = books;
  if (!books) {
    return null;
  }
  books = filter(
    books,
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
  switch (type) {
    case 'popular':
      return orderBy(books, 'rating', 'desc');
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author');
    default:
      return books;
  }
};

const getCartItems = (ids, books) => {
  const keys = Object.keys(ids);
  return keys.map(id => ({
    id: parseInt(id),
    image: books[id].image,
    title: books[id].title,
    count: ids[id].length,
    total: ids[id].length * books[id].price
  }));
};

const mapStateToProps = ({
  cart,
  books,
  filter: { filterBy, searchQuery }
}) => {
  const items = filterBooks(filterBy, searchQuery, books.items);
  const groupIds = groupBy(cart.items);
  const cartItems = getCartItems(groupIds, books.items);
  return {
    items,
    isLoading: books.isLoading,
    filterBy,
    cartItems,
    searchQuery
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(books, dispatch),
  ...bindActionCreators(cart, dispatch),
  getCartItem: (cartItems, id) => find(cartItems, { id })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
