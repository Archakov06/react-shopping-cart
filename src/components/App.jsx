import React, { Component } from 'react';
import { Container, Card, Grid, Loader } from 'semantic-ui-react';

import { Menu, Book, Sidebar } from './';

class App extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const {
      items,
      isLoading,
      addToCart,
      removeFromCart,
      cartItems,
      getCartItem,
      searchQuery
    } = this.props;
    return (
      <Container>
        <Menu items={cartItems} />

        <Grid className="wrapper">
          <Grid.Column width={12}>
            {isLoading && !items ? (
              <Loader active inline="centered" content="Загрузка..." />
            ) : (
              <Card.Group itemsPerRow={3}>
                {items.map((bookProps, i) => (
                  <Book
                    {...bookProps}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    key={i}
                    cartItem={getCartItem(cartItems, bookProps.id)}
                  />
                ))}
              </Card.Group>
            )}
            {searchQuery && !items.length && <h2>Ничего не найдено :(</h2>}
          </Grid.Column>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
