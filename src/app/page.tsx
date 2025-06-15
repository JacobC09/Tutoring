import Hero from "@/layout/Hero"
import About from "@/layout/About";
import Testimonials from "@/layout/Testimonials"
import Contact from "@/layout/Contact";
import Subjects from "@/layout/Subjects";
import Faq from "@/layout/Faq";
import Footer from "@/layout/Footer";
import Chat from "@/components/Chat";

export default function Home() {

    return (
        <>
            <Hero />
            <About />
            <Subjects />
            <Contact />
            <Faq />
            <Testimonials />
            <Footer />
            <Chat />
        </>
    );
}
