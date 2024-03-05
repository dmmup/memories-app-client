import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import {Helmet} from "react-helmet";
import reducers from './reducers'



const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <Provider store={store}>
    <Helmet>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                
    </Helmet>
    <App />
  </Provider>
);

