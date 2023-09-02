import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Fonts, theme } from './components/Font';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <Fonts />
    <App />
  </ChakraProvider>
);

serviceWorker.unregister();
reportWebVitals();