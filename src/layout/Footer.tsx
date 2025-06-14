import HoverLink from "@/components/animations/HoverLink";
import { EMAIL, PHONE } from "@/lib/constants";
import { FaLocationDot } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white px-24" id="footer">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-16 xl:gap-32 pt-32 pb-24">
                <div className="text-white grid gap-6 font-bold">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot size={25} />
                        <p className="font-bold text-2xl">Oakville</p>
                    </div>
                    <div className="text-blue-500 tracking-widest text-5xl space-y-2 [text-shadow:4px_4px_0px_theme(colors.blue.800)]">
                        <h1>Comay</h1>
                        <h1>Tutoring</h1>
                        <h1>Co.</h1>
                    </div>
                    <p className="text-lg">For students, by students</p>
                </div>

                <div className="space-y-4">
                    <p className="text-lg font-bold ">Sign up for our newsletter for updates!</p>
                    <div>
                        <form action={`https://formsubmit.co/${EMAIL}`} method="post" className="flex gap-4 text-black flex-col 3xl:flex-row">
                            <input type="hidden" name="_autoresponse" value="Thanks for joining the newsletter! Stay tuned for updates." />
                            <input type="hidden" name="_subject" value="[Newsletter]" />
                            <input type="email" name="email" placeholder="example@domain.com" autoComplete="email"
                                className="w-full py-3 px-6 rounded-md border border-gray-300 text-base font-medium outline-none focus:border-blue-400 focus:shadow-sm" />
                            <div>
                                <button
                                    className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-lg mr-16 space-y-4">
                    <p className="font-bold text-blue-400">Contact</p>
                    <p>{PHONE}</p>
                    <p>{EMAIL}</p>
                </div>

                <div className="text-lg mr-64 space-y-4">
                    <p className="font-bold text-blue-400">Navigation</p>
                    <HoverLink underline="bg-white" href="#about">About</HoverLink>
                    <HoverLink underline="bg-white" href="#subjects">Subjects</HoverLink>
                    <HoverLink underline="bg-white" href="#contact">Contact</HoverLink>
                    <HoverLink underline="bg-white" href="#testimonials">Testimonials</HoverLink>
                    <HoverLink underline="bg-white" href="#faq">FAQ</HoverLink>
                </div>
            </div>

            <div className="h-[2px] bg-gray-600"></div>

            <div>
                <p className="text-center text-gray-600 py-8">Website made from scratch by Jake - All rights reserved</p>
            </div>
        </footer>
    );
}
