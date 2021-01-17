import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { UserProvider } from './store/UserProvider'

import './index.css'

ReactDOM.render(
    <UserProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </UserProvider>,
    document.getElementById('root')
);
