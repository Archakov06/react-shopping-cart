import React from 'react';
import { connect } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react';

import { setFilter, setSearchQuery } from '../actions/filter';

const Sidebar = ({ filterBy, searchQuery, setFilter, setSearchQuery }) => {
  const filters = [
    { type: 'all', label: 'Все' },
    { type: 'popular', label: 'Популярные' },
    { type: 'price_high', label: 'Цена (дорогие)' },
    { type: 'price_low', label: 'Цена (дешевые)' },
    { type: 'author', label: 'Автор' }
  ];

  return (
    <Menu vertical>
      {filters.map((o, i) => (
        <Menu.Item
          key={i}
          name="inbox"
          active={filterBy === o.type}
          onClick={setFilter.bind(this, o.type)}>
          {o.label}
        </Menu.Item>
      ))}

      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск книги..."
          value={searchQuery}
        />
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = ({ filter: { filterBy, searchQuery } }) => ({
  filterBy,
  searchQuery
});

const mapDispatchToProps = {
  setFilter,
  setSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
