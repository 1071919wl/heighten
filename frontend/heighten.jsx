import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root');
    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<h1>Testing Root</h1>, root);
});