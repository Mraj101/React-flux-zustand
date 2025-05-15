import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Box,
  Button,
  TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useCartStore from '../store/CartStore';


function CartDrawer({ open, onClose }) {
  // Get cart data and actions from store
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore(state => ({
    items: state.items,
    removeItem: state.removeItem,
    updateQuantity: state.updateQuantity,
    clearCart: state.clearCart,
    getTotal: state.getTotal
  }));

  const handleQuantityChange = (id, value) => {
    updateQuantity(id, parseInt(value) || 1);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Your Cart
        </Typography>
        
        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            Your cart is empty.
          </Typography>
        ) : (
          <>
            <List>
              {items.map((item) => (
                <ListItem key={item.id} divider>
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                  <TextField
                    sx={{ width: 60, mr: 2 }}
                    size="small"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    InputProps={{ inputProps: { min: 1 } }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" align="right">
                Total: ${getTotal().toFixed(2)}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" color="error" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}

export default CartDrawer;