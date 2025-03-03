export default function About() {
    return (
        <div className="px-24 py-32 mt-12 min-h-[2000px] bg-gray-50">
            <div className="m-auto max-w-screen-xl">
                
                <p className="tracking-[10px] text-center text-blue-400 font-bold">About Us</p>

                <div className="my-20 flex">
                    <div className="w-2/5">
                        <h2 className="text text-7xl text-blue-400">What  do we offer?</h2>
                    </div>

                    <div className="flex-1 border-l border-black ml-12 px-12 py-4 text-lg flex flex-col gap">
                        <p className="font-bold">One-on-One Lessons</p>
                        <p className="my-2">Get personalized tutoring tailored to your needs, all from the comfort of your home. No commuting—just focused learning.</p>
                        <ul className="list-disc ml-10 text-gray-600 mb-8">
                            <li>Customized lesson plans to target your strengths and challenges</li>
                            <li>Flexible session lengths to match your learning pace</li>
                            <li>Available on your preferred platform (Zoom, Google Meet, etc.)</li>
                        </ul>

                        <p className="font-bold">Homework Help & Exam Prep</p>
                        <p className="my-2">Struggling with assignments or upcoming tests? We provide structured guidance to help you stay on track.</p>
                        <ul className="list-disc ml-10 text-gray-600 mb-8">
                            <li>Step-by-step explanations for difficult concepts</li>
                            <li>Practice problems and review sessions to reinforce learning</li>
                            <li>Strategies for effective test-taking and time management</li>
                        </ul>

                        <p className="font-bold">Flexible Scheduling</p>
                        <p className="my-2">We know students have busy lives, so we make learning fit into your schedule.</p>
                        <ul className="list-disc ml-10 text-gray-600">
                            <li>Sessions available after school, evenings, and weekends</li>
                            <li>Choose a frequency that works best for you—weekly, biweekly, or as needed.</li>
                            <li>No long-term commitments—just high-quality tutoring when you need it</li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
}