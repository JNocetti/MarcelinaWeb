import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ScrollToTop from "./components/ScrollToTop.tsx";
import CartPage from "./pages/CartPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 600, // duración por defecto de las animaciones
            once: true,     // animar solo la primera vez
        });
    }, []);

    return (
        <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer/>
        </>
    );
}

export default App;
