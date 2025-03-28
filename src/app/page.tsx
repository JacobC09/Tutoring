import Hero from "@/layout/Hero"
import About from "@/layout/About";
import Reviews from "@/layout/Reviews"
import Contact from "@/layout/Contact";
import Subjects from "@/layout/Subjects";

export default function Home() {

    return (
        <>
            <Hero />
            <About />
            <Subjects />
            <Contact />
            <Reviews />
            <div className="h-screen">

            </div>
        </>
    );
}
