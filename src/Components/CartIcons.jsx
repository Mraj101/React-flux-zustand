import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCartStore from '../store/CartStore';


function CartIcon({ onClick }) {
  // Get item count from cart store
  const itemCount = useCartStore(state => state.getItemCount());
  
  return (
    <IconButton color="inherit" onClick={onClick}>
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartIcon;