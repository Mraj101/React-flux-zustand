import React from 'react';
import ThemeProvider from './theme/ThemeProvider';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import ThemeToggle from './theme/ThemeToggle';

// Your main app content
function AppContent() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="body1">
          This app supports dark and light mode using MUI themes.
        </Typography>
      </Container>
    </>
  );
}

// Wrap your app with the ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;