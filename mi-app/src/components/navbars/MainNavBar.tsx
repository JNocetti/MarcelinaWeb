import icon from '../../assets/mainIcon.png'
import { Link } from 'react-router-dom';


const MainNavbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src={icon}
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>


                <ul className="flex space-x-6 text-gray-700 font-semibold">
                    <li>
                        <a href="/" className="hover:text-red-600 transition">Inicio</a>
                    </li>
                    <li>
                        <Link to="/productos" className="hover:text-red-600 transition">Productos</Link>
                    </li>
                    <li>
                        <a href="#" className="hover:text-red-600 transition">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavbar
