import Question from "@/components/Question";
import Section from "@/components/Section";

export default function Faq() {
    return (
        <Section dark id="faq">
            <p className="tracking-[10px] text-center font-bold">Freqeuently Asked Questions</p>
            <h2 className="text text-7xl text-center text-blue-400 mt-12 mb-24">Have Questions?</h2>

            <Question />
            <Question />
            <Question />
            <Question />
            <Question />

            <div className="mt-16 flex flex-col items-center w-full space-y-6">
                <p>Still Got Questions? Ask them here</p>
                <button
                    className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none">
                    Contact
                </button>
            </div>
        </Section>
    );
}
