import React, { useState} from 'react';
import { Typography, Button, IconButton, Badge, Box} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Cart = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  

  return (
    <Box>
         {cartItems.some(cartItem => cartItem.id === products.id) ? (
                      <IconButton sx={{
                     backgroundColor: "#0A2647",

                      }} onClick={() => removeFromCart(products)}>
                         Remove <ShoppingCart />
                      </IconButton>
                    ) : (
                      <Button sx={{
                      backgroundColor: "#0A2647",

                      }}variant="contained" color="primary" onClick={() => addToCart(products)}>
                        Add to Cart
                      </Button>
                    )}
                    <Badge badgeContent={cartItems.filter(cartItem => cartItem.id === products.id).length} color="secondary">
                      <Typography variant="body2" component="p">
                        Quantity:
                      </Typography>
                    </Badge>
    </Box>
  );
};

export default Cart;
