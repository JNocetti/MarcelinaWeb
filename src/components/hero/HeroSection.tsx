import { useScroll, useTransform, motion } from 'framer-motion';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -30]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            <motion.img
                src="/MarcelinaWeb/marcelinaHero2.png"
                alt="Hero"
                style={{ y, opacity }}
                className="absolute top-0 left-0 w-full h-full object-contain"
            />
        </section>
    );
};

export default HeroSection;
