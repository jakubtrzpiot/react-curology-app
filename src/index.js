import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import Navbar from './components/Navbar';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <App />
      <ShoppingCart/>
    </BrowserRouter>
  </Provider>,
);
