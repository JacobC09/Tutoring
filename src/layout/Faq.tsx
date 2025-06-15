"use client";

import Button from "@/components/Button";
import Question from "@/components/Question";
import Section from "@/components/Section";
import FadeIn from "@/components/animations/FadeIn";
import GradualSpacing from "@/components/animations/GradualSpacing";

export default function Faq() {
    return (
        <Section id="faq">
            <FadeIn distance={20}>
                <p className="tracking-[10px] text-center font-bold">Frequently Asked Questions</p>
            </FadeIn>
            <GradualSpacing center={true} length={0.02} className="font-title text-5xl sm:text-7xl text-blue-400 mt-12 mb-24">Have Questions?</GradualSpacing>
            
            {faqs.map((info, key) => 
                <FadeIn key={key}>
                    <Question {...info} />
                </FadeIn>
            )}

            <FadeIn>
                <div className="mt-16 flex flex-col items-center w-full space-y-6">
                    <p>Still have questions? Ask them here</p>
                    <Button
                        onClick={() => document.getElementById("contact").scrollIntoView()}
                    >
                        Contact
                    </Button>
                </div>
            </FadeIn>
        </Section>
    );
}

const faqs = [
    {
        question: "How does pricing work?",
        answer: "Out of all the tutoring agencies in Oakville, we are by far the least expensive. Pricing depends on the length and frequency of sessions. I offer flexible packages to fit your budget and schedule — feel free to contact me for a personalized quote."
    }, 
    {
        question: "Why should I choose your tutoring services?",
        answer: "Tutors who work at other institutions get paid either way and have no incentive to keep students happy. They also have to follow a rigid, outdated curriculum that teaches kids how to pass tests, not understand concepts."
        
    },
    {
        question: "How long are the sessions?",
        answer: "Every kid is different, so I offer flexible session lengths. Some benefit from long sessions while others work better with shorter, more focused ones. We can adjust the length based on your child's needs and attention span."
    },
    {
        question: "When are you available for tutoring?",
        answer: "I am available after school and on weekends. All that's left is to see what works for you!"
    },
    {
        question: "What do I need to get started?",
        answer: "Just reach out to book a consultation! We'll discuss your child's needs and set up a plan that works for you."
    }
];
