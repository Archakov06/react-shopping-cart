import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">Магазин книг</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
