import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import Navbar from "../components/Navbar"

export default function Home(){
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
        </div>
    )
}