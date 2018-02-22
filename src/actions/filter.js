export const setFilter = type => ({
  type: 'SET_FILTER',
  payload: type
});

export const setSearchQuery = value => ({
  type: 'SET_SEARCH_QUERY',
  payload: value
});
