import Section from "@/components/Section";
import { FaBook, FaDna, FaComputer, FaMusic, FaBrain } from "react-icons/fa6"
import { PiMathOperationsBold } from "react-icons/pi";
import FadeIn from "@/components/FadeIn";


export default function Subjects() {
    return (
        <Section id="subjects">
            <p className="tracking-[10px] text-center font-bold">Subjects</p>
            <h2 className="text text-7xl text-center text-blue-400 mt-12 mb-24">What We Offer</h2>

            <div className="grid lg:grid-cols-2">

                <FadeIn>
                    <div className="p-8 lg:pl-0 border-gray-200 border-t lg:border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <PiMathOperationsBold size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Math</p>
                        <p className="py-2">
                            Tutoring for Grades 1-12, including arithmetic, algebra, geometry, data management, and advanced functions.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaDna size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Science</p>
                        <p className="py-2">
                            Support for Grades 1-12 in general science, biology, chemistry, and physics — with a focus on building real understanding.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="p-8 lg:pl-0 border-gray-200 border-t lg:border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaBook size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">English</p>
                        <p className="py-2">
                            Help with reading, writing, grammar, and essay skills for students in Grades 1-12.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaComputer size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Computer Science</p>
                        <p className="py-2">
                            For Grades 6-12: learn the basics of programming, algorithms, and computer logic. Languages include Python, C++, JavaScript, and more.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="p-8 lg:pl-0 border-gray-200 border-t lg:border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaMusic size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Music</p>
                        <p className="py-2">
                            For Grades 1-12: music theory, composition, and performance basics. I also do piano and guitar lessons.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaBrain size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Other</p>
                        <p className="py-2">
                            Need help with something outside these subjects? I work with students in Grades 1-12 across a wide range of topics, just ask.
                        </p>
                    </div>
                </FadeIn>

            </div>
        </Section>
    );
}