import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './ThemeProvider';

function ThemeToggle() {
  const theme = useTheme();
  const colorMode = useColorMode();
  
  return (
    <IconButton 
      onClick={colorMode.toggleColorMode} 
      color="inherit"
      aria-label="toggle dark/light theme"
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ThemeToggle;