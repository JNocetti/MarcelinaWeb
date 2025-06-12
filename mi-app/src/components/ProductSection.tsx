import FadeInSection from "./FadeInSection.tsx";
import {useState} from "react";

interface Product {
    type: 'Cocido' | 'Fresco' | 'Seco';
    name: string;
    img: string;
    ingredients: string;
}

const products: Product[] = [
    {
        type: 'Cocido',
        name: 'Lomito Ahumado',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=100&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne suina, agua, sal, azúcar, nitrato de sodio (INS 251), nitrito de sodio (INS 250).'
    },
    {
        type: 'Cocido',
        name: 'Morcilla Dulce',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=102&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'cueros porcinos, carne porcina, sangre bovina, azúcar, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.'
    },
    {
        type: 'Cocido',
        name: 'Morcilla Salada',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=108&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'cueros porcinos, carne porcina, sangre bovina, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano.'
    },
    {
        type: 'Cocido',
        name: 'Paté de Hígado',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=116&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'hígado vacuno, grasa de cerdo, fécula, sal, pimienta, ají, orégano, ajo en polvo, nuez moscada, ácido ascórbico (ins300).'
    },
    {
        type: 'Fresco',
        name: 'Chorizo Mezcla Hilo Blanco',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=122&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne vacuna, carne porcina, grasa porcina, fécula de maíz, sal, azúcar, pimienta, ajo, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).'
    },
    {
        type: 'Fresco',
        name: 'Chorizo Mezcla Especial',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=124&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne porcina, carne vacuna, grasa porcina, sal, azúcar, pimienta, ajo, ají, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).'
    },
    {
        type: 'Fresco',
        name: 'Chorizo Rellenito',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=128&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne porcina, carne vacuna, grasa porcina, queso, morrón, aceituna, sal, azúcar, pimienta, ajo, ají orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).'
    },
    {
        type: 'Fresco',
        name: 'Salchicha Parrillera',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=126&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne porcina, carne vacuna, grasa porcina, sal, azúcar, pimienta, ajo, ají, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251).'
    },
    {
        type: 'Seco',
        name: 'Pipa Caserito',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=96&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne vacuna, carne porcina, grasa porcina, sal, pimienta, azúcar, ajo, estabilizante (ins339I), antioxidante (ins300), conservador (ins251)'
    },
    {
        type: 'Seco',
        name: 'Salamin',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=98&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne vacuna, carne porcina, grasa porcina, sal, pimienta, azúcar, ajo, estabilizante (INS 339i), antioxidante (INS 300) conservador (INS 251).'
    },
    {
        type: 'Seco',
        name: 'Jamón Crudo',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=90&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'jamón de cerdo, sal, azúcar, pimienta, canela, clavo de olor, eritorbato de sodio (INS 316), nitrato de sodio (INS 250), nitrito de sodio (INS 251).'
    },
    {
        type: 'Seco',
        name: 'Longaniza',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=92&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne vacuna, carne porcina, grasa porcina, sal, azúcar, pimienta, ajo, anís, pimentón, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251), colorante (INS 120).'
    },
    {
        type: 'Seco',
        name: 'Salame Tipo Millán',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=86&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne vacuna, carne porcina, grasa porcina, sal, estabili- zante (INS 339i), pimienta, azúcar, ajo, antioxidante (INS 300), conser- vador (INS 251).'
    },
    {
        type: 'Seco',
        name: 'Bondiola',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=88&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne suina, sal, azúcar, pimienta, canela, clavo de olor, eritorbato de sodio (INS 316), nitrato de sodio (INS 250), nitrito de sodio (INS 251).'
    },
    {
        type: 'Cocido',
        name: 'Panceta Ahumada',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=112&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: ' panceta, agua, sal, azúcar, nitrato de sodio (INS 251), nitrito de sodio (INS 250). '
    },
    {
        type: 'Cocido',
        name: 'Morcilla dulce envasada',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=106&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'cueros porcinos, carne porcina, sangre bovina, azúcar, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano. '
    },
    {
        type: 'Cocido',
        name: 'Morcilla salada envasada',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=110&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'cueros porcinos, carne porcina, sangre bovina, cebolla, fécula de maíz, grasa porcina, sal, pimienta, ají, nuez moscada, ajo, orégano. '
    },
    {
        type: 'Cocido',
        name: 'Queso de Cerdo',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=118&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne porcina, lengua vacuna, cueros porcinos, grasa porcina, sal, fécula, pimienta, ají, orégano, ajo en polvo, nuez moscada, ácido ascórbico (INS 300), nitrato de sodio (INS 251),nitrito de sodio (INS 250).'
    },
    {
        type: 'Fresco',
        name: 'Chorizo Colorado Especial',
        img: 'https://ss-static-01.esmsv.com/id/173223/productos/obtenerimagen/?id=120&useDensity=false&width=1280&height=720&tipoEscala=contain',
        ingredients: 'carne porcina, carne vacuna, grasa porcina, sal, azúcar, ajo, pimienta, ají, pimentón, orégano, nuez moscada, estabilizante (INS 339i), antioxidante (INS 300), conservador (INS 251), colorante (INS 120).'
    }
];

// Agrupar por tipo
const groupByType = (items: Product[]) => {
    return items.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
    }, {} as Record<string, Product[]>);
};

export const ProductSection = () => {
    const [filter, setFilter] = useState<'Todos' | 'Cocido' | 'Fresco' | 'Seco'>('Todos');

    const grouped = groupByType(
        filter === 'Todos' ? products : products.filter(p => p.type === filter)
    );

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Filtros */}
                <div className="flex justify-center mb-8 gap-3">
                    {['Todos', 'Cocido', 'Fresco', 'Seco'].map(tipo => (
                        <button
                            key={tipo}
                            onClick={() => setFilter(tipo as any)}
                            className={`px-4 py-2 rounded-full border 
                                ${filter === tipo
                                ? 'bg-red-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                        >
                            {tipo}
                        </button>
                    ))}
                </div>

                {Object.entries(grouped).map(([type, items]) => (
                    <FadeInSection key={type} animation="fade-up" delay={100}>
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">{type}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((product) => (
                                    <FadeInSection key={product.name} animation="fade-up" delay={200}>
                                        <div className="bg-gray-50 rounded shadow transition-transform duration-300 transform hover:scale-105 hover:shadow-lg p-4">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-48 object-contain mb-4"
                                            />
                                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                            {/*<p className="text-sm text-gray-600 mt-2">{product.ingredients}</p>*/}
                                        </div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

