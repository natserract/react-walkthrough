import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import { AllContextProvider } from './store/configureStore'
import Toast from './components/toast';
import FullscreenLoading from './components/loading';

ReactDOM.render(
  <AllContextProvider>
    <BrowserRouter>
      <Toast />
      <React.Suspense fallback={<FullscreenLoading />}>
        <Routes />
      </React.Suspense>
    </BrowserRouter>
  </AllContextProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
