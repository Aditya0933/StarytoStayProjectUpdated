import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ff8a00'
    },
    tertiory:{
      main: '#272e37'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      xmd:720,
      md: 900,
      lg: 1250,
      xlg:1350,
      xl: 1536,
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
