import { useScroll, useTransform, motion } from 'framer-motion';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -30]); // Efecto más suave
    const opacity = useTransform(scrollY, [0, 300], [1, 0.7]); // Opacidad no baja del todo

    return (
        <section className="h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            <motion.img
                src="/marcelinaHero2.png"
                alt="Hero"
                style={{ y, opacity }}
                className="max-h-full max-w-full object-cover"
            />
        </section>
    );
};

export default HeroSection;
