import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { ProjectCard } from '@/components/project-card';
import { NavbarRwfd } from '@/components/projects/navbar-rwfd';
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
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

                    <div className="bg-dot-pattern p-4 md:p-16 lg:p-8">
                        <div className="oveflow-hidden flex h-auto w-full items-start justify-center object-contain">
                            <div className="grid w-full grid-cols-1 justify-items-center gap-x-2 md:grid-cols-3 lg:grid-cols-3">
                                <div className="relative h-[250px] w-[250px] rotate-[-5] transition-all duration-299 ease-in-out hover:rotate-1">
                                    <Memo number="1" memotext="What's the need & user purpose?" />
                                </div>
                                <div className="relative h-[250px] w-[250px] rotate-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                    <Memo number="2" memotext="How are we going to design this?" />
                                </div>
                                <div className="relative h-[250px] w-[250px] rotate-2 transition-all duration-299 ease-in-out hover:rotate-4">
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
                    <div className="grid h-auto w-auto grid-cols-1 items-start justify-start md:grid-cols-2">
                        <img src="/images/rwfd/ideate-req.png" />
                        <img src="/images/rwfd/ideate-brainstrom.png" />
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-start justify-start">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">Results</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                        sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet.
                    </p>
                </div>
                <div className="mt-4 flex h-[40rem] w-full flex-col items-center justify-center">
                    <ScrollStack className="w-full">
                        <ScrollStackItem>
                            <ProjectCard
                                link="/rwfd"
                                title={
                                    <>
                                        Real World <span className="font-serif italic">Fake Data</span> Website
                                    </>
                                }
                                description={
                                    <>
                                        March - July 2025 | <span className="font-bold">Role</span> Product Designer |{' '}
                                        <span className="font-bold">User</span> Academic Civitas | <span className="font-bold">Scope</span>{' '}
                                        Information Gathering, UI/UX, User Research, Prototyping, Design System
                                    </>
                                }
                                intro="In a 3-person team, I designed and coded interface following SLDC and Design Thinking framework."
                                problem="How Might We build a website to publish and manage research datasets from Airlangga University's faculty and staff, making them accessible for use?"
                                imgSrc1="/images/faq.gif"
                                imgSrc2="/images/landing-page.gif"
                                imgSrc3="/images/tags-dataset.gif"
                            />
                        </ScrollStackItem>
                        <ScrollStackItem>
                            <ProjectCard
                                title={
                                    <>
                                        TedXUA <span className="font-serif italic">Official</span> Website
                                    </>
                                }
                                description="Aug - Oct 2024 | Role UI/UX Designer | Users General Buyer | Scope UI/UX, Prototyping, System Designs"
                                intro="I contributed in designing responsive Landing Page, Event Page and Ticketing Page along with the system flows."
                                problem="How Migh We Build an official website that shows main theme idea and easy to navigate."
                                imgSrc1="/images/CALEB.png"
                                imgSrc2="/images/CALEB.png"
                            />
                        </ScrollStackItem>
                        <ScrollStackItem>
                            <ProjectCard
                                title={
                                    <>
                                        Abstract <span className="font-serif italic">Keywords</span> Extraction
                                    </>
                                }
                                description="March - July 2025 | Role Product Designer | Users Academic Civitas  | Scope Information Gathering, UI/UX, User Research, Prototyping, Design System"
                                intro="In a 3-person team, I designed and coded interface following SLDC and Design Thinking framework."
                                problem="How Might We build a website to publish and manage research datasets from Airlangga University's faculty and staff, making them accessible for use?"
                                imgSrc1="/images/faq.gif"
                                imgSrc2="/images/tags-dataset.gif"
                            />
                        </ScrollStackItem>
                    </ScrollStack>
                </div>
                <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black">Afterword</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                        sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
