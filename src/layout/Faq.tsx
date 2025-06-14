"use client";

import Question from "@/components/Question";
import Section from "@/components/Section";
import FadeIn from "@/components/animations/FadeIn";
import GradualSpacing from "@/components/animations/GradualSpacing";
import TextWave from "@/components/animations/TextWave";

export default function Faq() {
    return (
        <Section dark id="faq">
            <FadeIn distance={20}>
                <TextWave center={true} className="tracking-[10px] text-center font-bold">Freqeuently Asked Questions</TextWave>
            </FadeIn>
            <GradualSpacing center={true} length={0.02} className="font-title text-5xl sm:text-7xl text-blue-400 mt-12 mb-24">Have Questions?</GradualSpacing>
            
            {faqs.map((info, key) => 
                <FadeIn key={key}>
                    <Question {...info} />
                </FadeIn>
            )}

            <FadeIn>
                <div className="mt-16 flex flex-col items-center w-full space-y-6">
                    <TextWave length={0.05}>Still Got Questions? Ask them here</TextWave>
                    <button
                        className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none"
                        onClick={() => document.getElementById("contact").scrollIntoView()}
                    >
                        Contact
                    </button>
                </div>
            </FadeIn>
        </Section>
    );
}

const faqs = [
    {
        question: "How does pricing work for your tutoring sessions?",
        answer: "Out of all the tutoring agencies in Oakville, we are by far the least expensive. Pricing depends on the length and frequency of sessions. I offer flexible packages to fit your budget and schedule — feel free to contact me for a personalized quote."
    },      
    {
        question: "What subjects and grades do you tutor?",
        answer: "I tutor students from Grade 1 through Grade 12 in Math, Science, English, Computer Science, Music, and other subjects as needed."
    },
    {
        question: "Do you offer both in-person and online sessions?",
        answer: "Yes! Tutoring is available both in-person in the Oakville area and online through platforms like Zoom or Google Meet."
    },
    {
        question: "How flexible is the scheduling?",
        answer: "I can't tutor during school hours but any other time works!"
    },
    {
        question: "How do you personalize tutoring for each student?",
        answer: "Every student gets a customized lesson plan based on their strengths, challenges, and learning goals to ensure the sessions are as effective as possible."
    },
    {
        question: "What do I need to get started?",
        answer: "Just reach out to book a consultation! We'll discuss your child's needs and set up a plan that works for you."
    }
];
