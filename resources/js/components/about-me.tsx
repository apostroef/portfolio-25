import { Photos } from './photo-drag-animation';
export function AboutMe() {
    return (
        <>
            <div className="flex h-full w-full flex-row items-center justify-center gap-x-2">
                <div className="relative inset-0 z-0 mt-0 flex h-auto w-[100%] flex-col items-center justify-center overflow-hidden lg:flex-row">
                    <div className="bg-dot-pattern relative inset-0 z-0 h-[20rem] w-[50vh] overflow-hidden rounded-xl border-1 border-black bg-[#FFF7E2] md:w-[80vh] lg:h-[35rem] lg:w-1/2">
                        <img src="/images/08.png" className="z-0 w-[4rem] items-end px-2 py-2 lg:w-[5rem]"></img>
                        <img src="/images/tanda.png" className="absolute right-0 bottom-0 z-0 h-auto w-[4rem] px-2 py-2 lg:w-[5rem]"></img>
                        <Photos />
                    </div>
                    <img
                        src="/images/spiral.svg"
                        className="absolute top-1/2 left-1/2 z-20 hidden h-[30rem] w-auto -translate-x-1/2 -translate-y-1/2 lg:block"
                        draggable="false"
                    />
                    <img
                        src="/images/spiral.svg"
                        className="absolute top-80 left-1/2 z-20 h-[20rem] w-auto -translate-x-1/2 -translate-y-1/2 rotate-90 md:h-[30rem] lg:hidden"
                        draggable="false"
                    />

                    <div className="bg-dot-pattern relative inset-0 z-0 h-[40rem] w-[50vh] rounded-xl border-1 border-black bg-[#FFF7E2] md:h-[35rem] md:w-[80vh] lg:w-1/2">
                        <div className="px-4 py-8 selection:bg-[#D2E09A] selection:text-[#5A6E0A] md:px-12 lg:px-8">
                            <div className="flex flex-row items-center justify-start gap-x-4">
                                <h1 className="font-sans text-[1.5rem] text-black md:text-[2.5rem]">
                                    {' '}
                                    <span className="font-serif font-bold italic">Ibra</span> Cardine
                                </h1>
                                <img src="/images/star-green.svg" className="h-[2rem]" />
                            </div>
                            <p className="mt-2 py-2 text-[1rem] text-black">
                                Beyond my academic discipline and community involvement, I have a strong passion for design. My skills encompass{' '}
                                <span className="font-bold">graphic design, video editing</span> and as my technological knowledge expanded,{' '}
                                <span className="font-bold">UI/UX design coupled with Front-End Development.</span>
                            </p>
                            <p className="py-2 text-black">
                                {' '}
                                My interests also extend to <span className="font-bold">Project & Product Development.</span> Through formal
                                education, I've gained expertise in key areas such as{' '}
                                <span className="font-bold">
                                    Software Development & Testing, Project Management, Risk Management, Enterprise Systems, and Business
                                    Architecture.
                                </span>{' '}
                            </p>
                            <p className="py-2 text-black">
                                I genuinely enjoy learning, particularly when it comes to the structured planning of projects and products, as I find
                                this crucial for engaging and effective programming.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
