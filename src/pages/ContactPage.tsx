import MainNavBar from '../components/navbars/MainNavBar';

const ContactPage = () => (
    <main className="bg-cyan-50 min-h-screen">
        <MainNavBar />
        <section className="container mx-auto px-4 py-12">
            {/* Imagen superior */}
            <div className="overflow-hidden rounded-lg shadow-lg mb-8">
                <img
                    src="https://ss-static-01.esmsv.com/id/173223/galeriaimagenes/obtenerimagen/?id=34&tipoEscala=stretch&width=1463&height=458"
                    alt="Visítanos"
                    className="w-full h-64 object-cover"
                />
            </div>

            {/* Texto en tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 leading-relaxed">
                        Desde nuestros orígenes en Juan Lacaze, nos especializamos en la elaboración de productos chacinados, seleccionando cuidadosamente las mejores carnes uruguayas provenientes de establecimientos de excelencia.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 leading-relaxed">
                        Con el objetivo de estar cada vez más cerca de nuestros consumidores, inauguramos un local de venta al público que ofrece cortes premium y atención personalizada. Nuestra meta es liderar el mercado de chacinados y cortes de alta calidad, cumpliendo con los más altos estándares, tanto a nivel nacional como internacional.
                    </p>
                </div>
            </div>

            {/* Título centrado */}
            <h2 className="text-3xl text-center text-gray-800 mt-6">
                Acércate a nuestro establecimiento
            </h2>

            {/* Mapa centrado */}
            <div className="flex justify-center mt-8">
                <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-md">
                    <iframe
                        title="Mapa Ubicación"
                        src="https://maps.google.com/maps?q=Ruta%2054%20Km.%205200%2C%2070500%20Juan%20L.%20Lacaze%2C%20Departamento%20de%20Colonia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-64 border-0"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    </main>
);

export default ContactPage;
