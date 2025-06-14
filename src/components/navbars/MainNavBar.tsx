import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src='/MarcelinaWeb/mainIcon.png'
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                <ul className="flex space-x-6 text-gray-700 font-semibold">
                    <li>
                        <Link to="/" className="hover:text-red-600 transition">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos" className="hover:text-red-600 transition">Productos</Link>
                    </li>
                    <li>
                        <a href="#contacto" className="hover:text-red-600 transition">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
