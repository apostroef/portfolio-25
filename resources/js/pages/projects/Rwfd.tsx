import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { NavbarRwfd } from '@/components/projects/navbar-rwfd';
import { XMargin } from '@/components/x-margin-line';
export default function Rwfd() {
    return (
        <>
            <XMargin />
            <div className="h-auto w-auto py-8">
                <NavbarRwfd />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-4 md:mt-24 md:px-32 lg:px-32 xl:px-64">
                <div className="flex flex-col justify-center md:items-start lg:items-center">
                    <h1 className="font-creato text-[3rem] text-black md:text-[4rem] lg:text-[3.5rem]">
                        Real World <span className="font-serif italic">Fake Data </span> Website
                    </h1>
                    <p>3 person-team internship project @SatuData Universitas Airlangga.</p>
                    <p>Website to manage, publish and find academic dataset directly from researches in Universitas Airlangga</p>
                    <img src="/images/rwfd/rwfd-mockup.png" className="h-auto w-[36rem]" />
                </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-x-4 gap-y-2 px-8 py-8 md:grid-cols-3 md:px-32 md:py-4 lg:grid-cols-5 lg:px-32 xl:px-64">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Timeline</h1>
                    <p>March - Aug, 2025</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Role</h1>
                    <p>Product Designer</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Scope</h1>
                    <p>Information Gathering, UI/UX, User Research, Prototyping, Design System</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Users</h1>
                    <p>Civitas Academic</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Tools</h1>
                    <img src="/images/rwfd/rwfd-tools.svg" />
                </div>
            </div>
            <hr></hr>
            <div className="lg:x-32 flex flex-col items-start justify-center px-8 py-8 md:px-32 xl:px-64">
                <div className="mt-4 items-start overflow-hidden">
                    <div className="flex h-auto flex-col items-start justify-start">
                        <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">Foreword</h1>
                        <p>
                            The internship is mandatory and held for <span className="font-bold">3 months </span>with my friends,{' '}
                            <span className="font-bold">Arya & Hansen</span>. I was given the responsibility for UI/UX, but then expanded to
                            information gathering to formulate reasonable product design.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-start justify-start">
                    <h1 className="text-[1.5rem] font-bold text-black lg:text-[2rem]">Challenges</h1>

                    <div className="bg-dot-pattern p-2 md:p-16 lg:p-8">
                        <div className="oveflow-hidden flex h-auto w-full items-center justify-center object-contain">
                            <div className="grid w-full grid-cols-1 justify-items-center gap-x-2 p-4 md:grid-cols-3 md:gap-x-24 md:py-0 lg:grid-cols-3">
                                <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                    <Memo number="1" memotext="What's the need & user purpose?" />
                                </div>
                                <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                    <Memo number="2" memotext="How are we going to design this?" />
                                </div>
                                <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                    <Memo number="3" memotext="How to transfer it to functional product?" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 md:mt-0">
                        My main challenge was to{' '}
                        <span className="bg-light-green font-bold"> lay the foundation for the RWFD website by following a user-centric </span>{' '}
                        development process. I had to identify the core purpose and needs of our target users, then translate those insights into a
                        practical product design that addressed their specific problems. The final outcome was to create an{' '}
                        <span className="bg-light-green font-bold">functional and user-friendly interface</span> that not only looked good, but also
                        directly reflected the needs and feedback gathered during the initial research phase.
                    </p>
                </div>

                <div className="mt-8 flex flex-col items-start justify-start">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">Process</h1>
                    <p>
                        We follow the SDLC AGILE Framework for the product life cycle. For the design purpose, I use Design Thinking approach for
                        phase 1 (Information Gathering) until phase 3 (Design).
                    </p>
                    <div className="bg-dot-pattern grid h-auto w-auto grid-cols-1 items-start justify-start p-4 md:grid-cols-2">
                        <img src="/images/rwfd/ideate-req.png" />
                        <img src="/images/rwfd/ideate-brainstrom.png" />
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-start justify-start">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">Results</h1>
                    <p>a</p>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                    <div className="flex h-auto w-full flex-col rounded-2xl bg-black">
                        <div className="flex flex-row items-start justify-center gap-x-4 p-4 md:gap-x-12">
                            <img src="images/landing-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                            <img src="images/rwfd/dataset-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                            <img src="images/rwfd/dataset-detail-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                        </div>
                        <p className="text-white"> abcd </p>
                    </div>
                </div>
                <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                    <div className="flex flex-row items-center justify-center gap-x-2">
                        <h1 className="font-creato text-[1.5rem] font-bold text-black">Afterword</h1>
                        <img src="images/star-component.png" className="h-full w-[1.5rem]" />
                    </div>
                    <p className="">
                        I deeply appreciate the opportunity provided by{' '}
                        <span className="bg-light-green font-bold">@SatuData Universitas Airlangga</span>. I learned a lot of valuable lessons,
                        getting hands-on experience in a product design approach that blends{' '}
                        <span className="bg-light-green font-bold">Design Thinking with SDLC</span>. It was an incredible journey of honing my skills
                        in selecting the right tech stack based on company standards and applying modern technologies like React libraries and
                        responsive design principles with Figma's Auto Layout.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
