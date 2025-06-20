import { createContext, useContext, useState, useEffect,  } from 'react';
import type {ReactNode} from 'react'

// Define el mismo tipo Product que usas en ProductSection
export interface Product {
    type: 'Cocido' | 'Fresco' | 'Seco';
    name: string;
    img: string;
    ingredients: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addItem: (product: Product, quantity: number) => void;
    removeItem: (productName: string) => void;
    updateQuantity: (productName: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    // Cada vez que cambie cartItems, se actualiza localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (product: Product, quantity: number) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.product.name === product.name);
            if (existing) {
                return prev.map(item =>
                    item.product.name === product.name
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { product, quantity }];
        });
    };

    const removeItem = (productName: string) => {
        setCartItems(prev => prev.filter(item => item.product.name !== productName));
    };

    const updateQuantity = (productName: string, quantity: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.product.name === productName
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
    return ctx;
};
