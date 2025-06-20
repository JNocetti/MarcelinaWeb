import FadeInSection from "./FadeInSection.tsx";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../context/CartContext";
import { Plus } from "lucide-react";

export const products: Product[] = [
    {
        type: "Cocido",
        name: "Lomito Ahumado",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=100&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne suina, agua, sal, azúcar, nitrato de sodio (INS 251), nitrito de sodio (INS 250).",
    },
    {
        type: "Cocido",
        name: "Morcilla Dulce",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=102&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "cueros porcinos, carne porcina, sangre bovina, azúcar, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.",
    },
    {
        type: "Cocido",
        name: "Morcilla Salada",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=108&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "cueros porcinos, carne porcina, sangre bovina, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.",
    },
    {
        type: "Cocido",
        name: "Paté de Hígado",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=116&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "hígado vacuno, grasa de cerdo, fécula, sal, pimienta, ají, orégano, ajo en polvo, nuez moscada, ácido ascórbico (ins300).",
    },
    {
        type: "Fresco",
        name: "Chorizo Mezcla Hilo Blanco",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=122&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne vacuna, carne porcina, grasa porcina, fécula de maíz, sal, azúcar, pimienta, ajo, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Fresco",
        name: "Chorizo Mezcla Especial",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=124&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne porcina, carne vacuna, grasa porcina, sal, azúcar, pimienta, ajo, ají, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Fresco",
        name: "Chorizo Rellenito",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=128&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne porcina, carne vacuna, grasa porcina, queso, morrón, aceituna, sal, azúcar, pimienta, ajo, ají, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Fresco",
        name: "Salchicha Parrillera",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=126&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne porcina, carne vacuna, grasa porcina, sal, azúcar, pimienta, ajo, ají, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Seco",
        name: "Pipa Caserito",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=96&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne vacuna, carne porcina, grasa porcina, sal, pimienta, azúcar, ajo, estabilizante (ins339I), antioxidante (ins300), conservador (ins251).",
    },
    {
        type: "Seco",
        name: "Salamin",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=98&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne vacuna, carne porcina, grasa porcina, sal, pimienta, azúcar, ajo, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Seco",
        name: "Jamón Crudo",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=90&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "jamón de cerdo, sal, azúcar, pimienta, canela, clavo de olor, eritorbato de sodio (INS 316), nitrato de sodio (INS 250), nitrito de sodio (INS 251).",
    },
    {
        type: "Seco",
        name: "Longaniza",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=92&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne vacuna, carne porcina, grasa porcina, sal, azúcar, pimienta, ajo, anís, pimentón, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251), colorante (INS 120).",
    },
    {
        type: "Seco",
        name: "Salame Tipo Millán",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=86&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne vacuna, carne porcina, grasa porcina, sal, estabilizante (INS 339i), pimienta, azúcar, ajo, antioxidante (INS 300), conservador (INS 251).",
    },
    {
        type: "Seco",
        name: "Bondiola",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=88&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne suina, sal, azúcar, pimienta, canela, clavo de olor, eritorbato de sodio (INS 316), nitrato de sodio (INS 250), nitrito de sodio (INS 251).",
    },
    {
        type: "Cocido",
        name: "Panceta Ahumada",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=112&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "panceta, agua, sal, azúcar, nitrato de sodio (INS 251), nitrito de sodio (INS 250).",
    },
    {
        type: "Cocido",
        name: "Morcilla dulce envasada",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=106&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "cueros porcinos, carne porcina, sangre bovina, azúcar, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.",
    },
    {
        type: "Cocido",
        name: "Morcilla salada envasada",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=110&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "cueros porcinos, carne porcina, sangre bovina, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.",
    },
    {
        type: "Cocido",
        name: "Queso de Cerdo",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=118&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne porcina, lengua vacuna, cueros porcinos, grasa porcina, sal, fécula, pimienta, ají, orégano, ajo en polvo, nuez moscada, ácido ascórbico (INS 300), nitrato de sodio (INS 251), nitrito de sodio (INS 250).",
    },
    {
        type: "Fresco",
        name: "Chorizo Colorado Especial",
        img: "https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=120&useDensity=false&width=1280&height=720&tipoEscala=contain",
        ingredients:
            "carne porcina, carne vacuna, grasa porcina, sal, azúcar, ajo, pimienta, ají, pimentón, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251), colorante (INS 120).",
    },
];

const groupByType = (items: Product[]) =>
    items.reduce((acc, item) => {
        (acc[item.type] = acc[item.type] || []).push(item);
        return acc;
    }, {} as Record<string, Product[]>);

export const ProductSection = () => {
    const { addItem } = useCart();
    const [filter, setFilter] = useState<"Todos" | "Cocido" | "Fresco" | "Seco">(
        "Todos"
    );
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const initial: Record<string, number> = {};
        products.forEach((p) => {
            initial[p.name] = p.name
                .toLowerCase()
                .includes("envasada")
                ? 1
                : 0.1;
        });
        setQuantities(initial);
    }, []);

    const handleQuantityChange = (name: string, value: number) => {
        const isUnit = name.toLowerCase().includes("envasada");
        const qty = isUnit
            ? Math.max(1, Math.round(value))
            : Math.max(0.1, parseFloat(value.toFixed(1)));
        setQuantities((prev) => ({ ...prev, [name]: qty }));
    };

    const formatDisplay = (qty: number, isUnit: boolean) => {
        if (isUnit) return `${qty} unid.`;
        if (qty < 1) return `${Math.round(qty * 1000)} gr.`;
        const [int, dec] = qty.toFixed(1).split(".");
        return dec === "0" ? `${int} kg` : `${int},${dec} kg`;
    };

    const grouped = groupByType(
        filter === "Todos"
            ? products
            : products.filter((p) => p.type === filter)
    );

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center mb-8 gap-3">
                    {["Todos", "Cocido", "Fresco", "Seco"].map((tipo) => (
                        <button
                            key={tipo}
                            onClick={() => setFilter(tipo as any)}
                            className={`px-4 py-2 rounded-full border ${
                                filter === tipo
                                    ? "bg-red-600 text-white"
                                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {tipo}
                        </button>
                    ))}
                </div>

                {Object.entries(grouped).map(([type, items]) => (
                    <FadeInSection key={type} animation="fade-up" delay={100}>
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                {type}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((product) => (
                                    <FadeInSection
                                        key={product.name}
                                        animation="fade-up"
                                        delay={200}
                                    >
                                        <div className="relative bg-gray-50 rounded shadow p-4 flex flex-col">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-48 object-contain mb-4"
                                            />
                                            <button
                                                onClick={() => setSelectedProduct(product)}
                                                className="absolute bottom-4 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                                                aria-label={`Ver ${product.name}`}
                                            >
                                                <Plus size={20} />
                                            </button>
                                            <h3 className="mt-auto text-lg font-semibold text-gray-900">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>

            {/* MODAL */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.name}
                            className="w-full h-64 object-contain mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">
                            {selectedProduct.name}
                        </h3>
                        <p className="italic text-gray-600 mb-4">
                            {selectedProduct.ingredients}
                        </p>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <input
                                type="number"
                                min={selectedProduct.name
                                    .toLowerCase()
                                    .includes("envasada")
                                    ? 1
                                    : 0.1}
                                step={selectedProduct.name
                                    .toLowerCase()
                                    .includes("envasada")
                                    ? 1
                                    : 0.1}
                                value={quantities[selectedProduct.name]}
                                onChange={(e) =>
                                    handleQuantityChange(
                                        selectedProduct.name,
                                        parseFloat(e.target.value)
                                    )
                                }
                                className="w-20 border rounded text-center"
                            />
                            <span className="text-gray-700">
                {formatDisplay(
                    quantities[selectedProduct.name],
                    selectedProduct.name
                        .toLowerCase()
                        .includes("envasada")
                )}
              </span>
                            <button
                                onClick={() => {
                                    addItem(
                                        selectedProduct,
                                        quantities[selectedProduct.name]
                                    );
                                    setSelectedProduct(null);
                                }}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Añadir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};