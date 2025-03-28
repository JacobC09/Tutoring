import Testamonial from "@/components/Testimonial";

export default function Reviews() {
    return (
        <div className="px-24 py-48 mt-12">
            <div className="m-auto max-w-screen-xl">

                <p className="tracking-[10px] text-center font-bold">Testamonials</p>
                <h2 className="text text-7xl text-center text-blue-400 mt-12 mb-24">Trusted By Dozens</h2>

                <div className="relative w-[1000px] h-[650px] mx-auto">
                    <Testamonial className="left-0 top-[50%] -rotate-6 translate-y-[-50%] absolute w-96 bg-gray-800 text-white" />
                    <Testamonial className="left-[50%] top-[5%] -rotate-12 translate-x-[-50%] absolute w-96 bg-cyan-300 text-gray-800" />
                    <Testamonial className="bottom-0 left-[20%] rotate-3 absolute w-96 bg-yellow-300 text-gray-800" />
                    <Testamonial className="right-0 top-[12%] rotate-6 absolute w-96 bg-lime-300 text-gray-800" />
                    <Testamonial className="right-[10%] bottom-[5%] rotate-12 absolute w-96 bg-rose-300" />
                </div>

            </div>
        </div>
    );
}