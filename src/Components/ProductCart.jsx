import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from '@mui/material';
import useCartStore from '../store/CartStore';


function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem);
  
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || "/api/placeholder/300/140"}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          variant="contained"
          onClick={() => addItem(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;