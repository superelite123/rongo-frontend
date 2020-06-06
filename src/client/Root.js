import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'sharded/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;