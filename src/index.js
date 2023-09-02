import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/markazi-text';
import '@fontsource-variable/karla';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const theme = extendTheme({
  fonts: {
    heading: `'Markazi Text Variable', sans-serif`,
    body: `'Karla Variable', sans-serif`,
  }
})

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>
);

serviceWorker.unregister();
reportWebVitals();