import Question from "@/components/Question";

export default function Faq() {
    return (
        <div className="px-24 py-48 mt-12 bg-gray-50">
            <div className="m-auto max-w-screen-lg">

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
                        className="hover:shadow-form rounded-md bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none">
                        Contact
                    </button>
                </div>

            </div>
        </div>
    );
}
