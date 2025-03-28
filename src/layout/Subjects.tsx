import { FaEnvelope } from "react-icons/fa6"

export default function Subjects() {
    return (
        <div className="px-24 py-48 mt-12">
            <div className="m-auto max-w-screen-xl">

                <p className="tracking-[10px] text-center font-bold">Testamonials</p>
                <h2 className="text text-7xl text-center text-blue-400 mt-12 mb-24">What We Offer</h2>

                <div className="grid grid-cols-2">

                    <div className="py-8 border-gray-200 border-t border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Math</p>
                        <p className="py-2">
                            Basic Arithmetic, Fractions and Decimals, Geometry, Measurement, Data and Graphing, Basic, Ratios and Proportions, Integers and Rational Numbers, Expressions and Equations, Geometry, Statistics, Probability, Functions, Algebra, Geometry, Algebra, Trigonometry, Pre-Calculus, Calculus, Statistics, Linear Algebra
                        </p>
                    </div>

                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Science</p>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos veritatis laudantium omnis maxime ad dolorum id vero veniam.</p>
                    </div>

                    <div className="py-8 border-gray-200 border-t border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">English</p>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos veritatis laudantium omnis maxime ad dolorum id vero veniam.</p>
                    </div>

                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Computer Science</p>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos veritatis laudantium omnis maxime ad dolorum id vero veniam.</p>
                    </div>

                    <div className="py-8 border-gray-200 border-t border-r">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Music</p>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos veritatis laudantium omnis maxime ad dolorum id vero veniam.</p>
                    </div>

                    <div className="p-8 border-gray-200 border-t">
                        <div className="bg-blue-300 text-blue-700 p-3 rounded-lg inline-block">
                            <FaEnvelope size={20} />
                        </div>

                        <p className="font-bold text-lg mt-4">Exam Prep</p>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos veritatis laudantium omnis maxime ad dolorum id vero veniam.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}