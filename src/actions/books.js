import axios from 'axios';

export const setBooks = books => ({
  type: 'SET_BOOKS',
  payload: books
});

export const fetchBooks = () => dispatch =>
  axios('/books.json').then(({ data }) => {
    dispatch(setBooks(data));
  });
