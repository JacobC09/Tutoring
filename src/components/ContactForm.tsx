export default function ContactForm() {
    return (
        <div className="bg-gray-200 p-8 rounded-lg">

            <form action="https://formsubmit.co/jake.comay@gmail.com" method="post">
                <input type="hidden" name="_autoresponse" value="Thanks for the message! Get back to you as soon as I can." />

                <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                        Full Name
                    </label>
                    <input type="text" name="name" placeholder="Your Name"
                        className="w-full py-3 px-6 rounded-md border border-gray-300 text-base font-medium outline-none focus:border-blue-400 focus:shadow-sm" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                        Email Address
                    </label>
                    <input type="email" name="email" placeholder="example@domain.com"
                        className="w-full py-3 px-6 rounded-md border border-gray-300 text-base font-medium outline-none focus:border-blue-400 focus:shadow-sm" />
                </div>
                <div className="mb-5">
                    <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                        Subject
                    </label>
                    <input type="text" name="_subject" placeholder="Enter your subject"
                        className="w-full py-3 px-6 rounded-md border border-gray-300 text-base font-medium outline-none focus:border-blue-400 focus:shadow-sm" />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                        Message
                    </label>
                    <textarea rows={4} name="message" placeholder="Type your message"
                        className="w-full py-3 px-6 rounded-md border border-gray-300 text-base font-medium outline-none focus:border-blue-400 focus:shadow-sm"></textarea>
                </div>
                <div>
                    <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
