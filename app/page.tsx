import AboutUs from "@/components/layout/about";
import HeroSection from "@/components/layout/hero-section";
import Subscribe from "@/components/layout/subscribe";
import Tariff from "@/components/layout/tariff";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutUs />
            <Subscribe />
            <Tariff />
        </>
    );
}