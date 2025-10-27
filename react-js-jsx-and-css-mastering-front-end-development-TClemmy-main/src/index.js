// This is the main.js
import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
            
        </BrowserRouter>
    </React.StrictMode>
);