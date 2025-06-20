import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import {CartProvider} from "./context/CartContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartProvider>
        <HashRouter >
            <App />
        </HashRouter>
        </CartProvider>
    </StrictMode>
);
