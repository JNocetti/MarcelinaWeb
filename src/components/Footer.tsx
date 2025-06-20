// src/components/Footer.tsx
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-white shadow-md">
            <div className="border-t shadow-inner">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-around items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">lamarcelinajl@hotmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Ruta 54, km 5,300, Juan Lacaze</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">+598 9830 2056</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Instagram className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">lamarcelinauy</span>
                    </div>
                </div>
            </div>

            {/* Imagen al pie sin padding adicional */}
            <div className="w-full overflow-hidden">
                <img
                    src="https://ss-static-01.esmsv.com/id/173223/galeriaimagenes/obtenerimagen/?id=32&tipoEscala=stretch&width=1463&height=458"
                    alt="Pie de página"
                    className="w-full h-32 object-cover"
                />
            </div>
        </footer>
    );
};
