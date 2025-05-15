import React, { useState } from 'react';
import { Container, Grid, AppBar, Toolbar, Typography, Box } from '@mui/material';


import ThemeToggle from '../theme/ThemeToggle';
import ProductCard from '../Components/ProductCart';
import CartIcon from '../Components/CartIcons';
import CartDrawer from '../Components/CartDrawer';

// Sample product data (in a real app, this would come from an API)
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with long battery life.",
    price: 199.99,
    image: "/api/placeholder/300/140"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness goals and stay connected with this stylish smart watch.",
    price: 249.99,
    image: "/api/placeholder/300/140"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with immersive sound quality and water resistance.",
    price: 89.99,
    image: "/api/placeholder/300/140"
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic aluminum stand for better posture and laptop cooling.",
    price: 49.99,
    image: "/api/placeholder/300/140"
  },
];

function ProductsPage() {
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Store
          </Typography>
          <CartIcon onClick={() => setCartOpen(true)} />
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ py: 4, flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        
        <Grid container spacing={4}>
          {sampleProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Box>
  );
}

export default ProductsPage;