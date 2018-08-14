import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import registerServiceWorker from 'registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'normalize.css';
import theme from 'theme'

ReactDOM.render((
    <BrowserRouter>
      <HttpsRedirect>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HttpsRedirect>
    </BrowserRouter>
  ), document.getElementById('root')
);

registerServiceWorker();
