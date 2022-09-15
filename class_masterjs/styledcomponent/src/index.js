import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const 객체이름 = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={객체이름}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);

