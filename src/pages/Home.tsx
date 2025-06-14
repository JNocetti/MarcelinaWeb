import MainNavBar from '../components/navbars/MainNavBar';
import HeroSection from '../components/hero/HeroSection';
import Landing from '../components/Landing';

const Home = () => {
    return (
        <main className="bg-black">
            <MainNavBar />
            <HeroSection />
            <Landing />
        </main>
    );
};

export default Home;
