import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ 
  toggleColorMode: () => {},
  mode: 'light' 
});


export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });
  
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // background: {
          //   default: mode === 'light' ? '#ffffff' : '#121212',
          //   paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          // },
          // text: {
          //   primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ffffff',
          // }
        },
        // components: {
        //   MuiCssBaseline: {
        //     styleOverrides: {
        //       body: {
        //         minHeight: '100vh',
        //         backgroundColor: mode === 'light' ? '#ffffff' : '#121212',
        //       }
        //     }
        //   }
        // }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}