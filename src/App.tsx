import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ScrollToTop from "./components/ScrollToTop.tsx";

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
        </Routes>
        </>
    );
}

export default App;
