import { Link } from 'react-router-dom';
import FadeInSection from "./FadeInSection.tsx";

const Landing = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-[1em] bg-white">
            <FadeInSection animation="fade-up" delay={100}>
                <h1 className="text-[2em] md:text-[2.5em] font-bold mb-[1em] text-gray-800">
                    Bienvenido!
                </h1>
                <p className="text-[1em] md:text-[1.125em] text-gray-600 mb-[1.5em] max-w-[35em]">
                    La mejor calidad, pensada para vos. Productos que cumplen con los más altos estándares nacionales e internacionales, para que disfrutes sin preocupaciones.
                </p>
                <Link
                    to="/productos"
                    className="bg-red-600 text-white px-[1.5em] py-[0.75em] rounded-lg text-[1em] hover:bg-red-700 transition"
                >
                    Ver productos
                </Link>
            </FadeInSection>
        </section>
    );
};

export default Landing;
