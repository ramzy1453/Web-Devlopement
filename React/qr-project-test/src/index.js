import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/index.css';
import App from './App';
import { store } from './provider/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);

