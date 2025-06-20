import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const MainNavbar = () => {
    const { cartItems } = useCart();
    const totalCount = cartItems.length;

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-14">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src="/MarcelinaWeb/mainIcon.png"
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                <ul className="list-none flex items-center space-x-6 text-gray-700 font-semibold">
                    <li>
                        <Link to="/" className="hover:text-red-600 transition">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos" className="hover:text-red-600 transition">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <a href="#contacto" className="hover:text-red-600 transition">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <Link to="/cart" className="relative">
                            <ShoppingCart className="h-5 w-5 text-blue-600" />
                            {totalCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                  {totalCount}
                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
