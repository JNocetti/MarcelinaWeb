// src/pages/CartPage.tsx
import { useRef, useEffect, useState } from 'react';
import MainNavBar from '../components/navbars/MainNavBar';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../components/ProductSection';

const ITEMS_PER_PAGE = 3;

const CartPage = () => {
    const { cartItems, updateQuantity, removeItem, addItem } = useCart();
    const isUnit = (name: string) => name.toLowerCase().includes('envasada');

    // Guarda/restaura scroll vertical
    const preserveScroll = (fn: () => void) => {
        const y = window.scrollY;
        fn();
        setTimeout(() => window.scrollTo(0, y), 0);
    };

    const formatDisplay = (qty: number, unit: boolean): string => {
        if (qty == null || isNaN(qty)) return '';
        if (unit) return `${qty} unid.`;
        if (qty < 1) return `${Math.round(qty * 1000)} gr.`;
        const [i, d] = qty.toFixed(1).split('.');
        return d === '0' ? `${i} kg` : `${i},${d} kg`;
    };

    // Productos sugeridos
    const suggestions = products.filter(
        (p) => !cartItems.some((ci) => ci.product.name === p.name)
    );

    // Paginación de sugerencias
    const totalPages = Math.ceil(suggestions.length / ITEMS_PER_PAGE);
    const [page, setPage] = useState(0);
    const suggestRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!suggestRef.current) return;
        const idx = page * ITEMS_PER_PAGE;
        const child = suggestRef.current.children[idx] as HTMLElement | undefined;
        child?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        window.scrollTo(0, window.scrollY);
    }, [page, suggestions]);

    return (
        <main>
            <MainNavBar />
            <div className="h-14" />

            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-12">
                {cartItems.length > 0 && (
                    <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
                )}

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-6">
                        <h2 className="text-2xl font-semibold">¡Tu carrito está vacío!</h2>
                        <p className="text-gray-600 text-center max-w-md">
                            Navega por nuestros productos y agrégalos al carrito para comenzar tu pedido.
                        </p>
                        <Link
                            to="/productos"
                            onMouseDown={(e) => e.preventDefault()}
                            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
                        >
                            Ver productos
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4 mb-12">
                        {cartItems.map((item) => {
                            const qty = item.quantity;
                            const unit = isUnit(item.product.name);
                            const disp = formatDisplay(qty, unit);
                            return (
                                <div
                                    key={item.product.name}
                                    className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md p-4"
                                >
                                    <img
                                        src={item.product.img}
                                        alt={item.product.name}
                                        className="w-24 h-24 object-contain bg-gray-50 rounded mb-4 sm:mb-0 sm:mr-6"
                                    />
                                    <div className="flex-grow">
                                        <h2 className="font-semibold text-lg mb-2">
                                            {item.product.name}
                                        </h2>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="number"
                                                min={unit ? 1 : 0.1}
                                                step={unit ? 1 : 0.1}
                                                value={qty}
                                                onChange={(e) =>
                                                    preserveScroll(() =>
                                                        updateQuantity(
                                                            item.product.name,
                                                            parseFloat(e.target.value)
                                                        )
                                                    )
                                                }
                                                className="w-20 border rounded text-center"
                                            />
                                            {disp && <span className="text-gray-700">{disp}</span>}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() =>
                                            preserveScroll(() => removeItem(item.product.name))
                                        }
                                        onMouseDown={(e) => e.preventDefault()}
                                        className="mt-4 sm:mt-0 text-red-600 hover:text-red-800 self-end"
                                        aria-label="Eliminar producto"
                                    >
                                        <Trash2 className="h-6 w-6" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Sugerencias */}
                <h2 className="text-2xl font-semibold mb-4">Agrega más productos!</h2>
                <div className="relative mb-12">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                        disabled={page === 0}
                        onMouseDown={(e) => e.preventDefault()}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50 z-10"
                        aria-label="Anterior sugerencias"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <div
                        ref={suggestRef}
                        className="flex overflow-x-auto hide-scrollbar space-x-4 px-4 sm:px-6"
                    >
                        {suggestions.map((p, idx) => {
                            const unit = isUnit(p.name);
                            const inPage = Math.floor(idx / ITEMS_PER_PAGE) === page;
                            return (
                                <div
                                    key={p.name}
                                    className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col ${
                                        !inPage
                                    }`}
                                >
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="w-full h-36 object-contain bg-gray-50 rounded mb-4"
                                    />
                                    <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
                                    <button
                                        onClick={() => preserveScroll(() => addItem(p, unit ? 1 : 0.1))}
                                        onMouseDown={(e) => e.preventDefault()}
                                        className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                    >
                                        Añadir
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                        disabled={page >= totalPages - 1}
                        onMouseDown={(e) => e.preventDefault()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50 z-10"
                        aria-label="Siguiente sugerencias"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default CartPage;
