import React from 'react';
import {
  Card,
  Grid,
  Icon,
  Image,
  Button,
  Label,
  Rating
} from 'semantic-ui-react';

const Book = ({
  id,
  image,
  title,
  author,
  price,
  rating,
  addToCart,
  cartItem
}) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{author}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Grid divided>
        <Grid.Row stretched>
          <Grid.Column width={cartItem && 12}>
            <Button
              onClick={addToCart.bind(this, id)}
              content="В корзину"
              color={cartItem ? 'green' : 'green'}
              basic={!!cartItem}
              fluid
            />
          </Grid.Column>
          {cartItem && (
            <Grid.Column width={4}>
              <Label color="green">{cartItem.count}</Label>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Icon name="rub" />
        {price}
      </div>
      <div>
        Рейтинг: &nbsp;
        <Rating icon="star" defaultRating={rating} maxRating={5} />
      </div>
    </Card.Content>
  </Card>
);

export default Book;
