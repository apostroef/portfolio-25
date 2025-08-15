import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Photos } from '@/components/photo-drag-animation';
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
            <div className="lg:x-32 flex flex-col items-center justify-center px-8 py-8 md:px-32 xl:px-64">
                <div className="mt-4 mb-24 grid grid-cols-1 items-start gap-x-8 md:mb-0 md:grid-cols-3 lg:mt-8 lg:mb-8 lg:grid-cols-3">
                    <div className="flex h-auto flex-col items-start justify-start md:col-span-2">
                        <h1 className="font-creato text-[1.5rem] font-bold text-black">Foreword</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                            sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        </p>
                    </div>

                    {/* <div className="relative inset-0 w-auto lg:h-[5rem] xl:mt-0">
                        <img
                            src="/images/rwfd/rwfd-eriq.svg"
                            className="absolute inset-0 z-10 h-[6rem] rotate-[2deg] transition-all duration-200 ease-in-out hover:z-15 hover:rotate-[-2deg] md:h-[10rem]"
                        />
                        <img
                            src="/images/rwfd/rwfd-dimas.svg"
                            className="absolute inset-0 top-1/5 left-2/5 z-10 h-[6rem] rotate-[-3deg] transition-all duration-200 ease-in-out hover:rotate-[2deg] md:top-[3rem] md:left-3/5 md:h-[10rem] lg:left-2/5"
                        />
                    </div> */}
                </div>

                <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                    <h1 className="text-[1.5rem] font-bold text-black">Challenges</h1>

                    <div className="bg-dot-pattern p-4 md:p-16 lg:p-8">
                        <div className="oveflow-hidden flex h-auto w-full items-start justify-center object-contain">
                            <div className="grid w-full grid-cols-1 justify-items-center gap-x-2 md:grid-cols-3 lg:grid-cols-3">
                                <div className="relative h-[250px] w-[250px] rotate-[-5] transition-all duration-299 ease-in-out hover:rotate-1">
                                    <Memo number="1" memotext="Identified user needs and purpose" />
                                </div>
                                <div className="relative h-[250px] w-[250px] rotate-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                    <Memo number="2" memotext="Designed product solutions from needs" />
                                </div>
                                <div className="relative h-[250px] w-[250px] rotate-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                    <Memo number="3" memotext="Developed user interface prototypes" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 md:mt-0">
                        My main challenge was to lay the foundation for the RWFD website by following a user-centric development process. I had to
                        identify the core purpose and needs of our target users, then translate those insights into a practical product design that
                        addressed their specific problems. The final and most critical step was to create an intuitive and user-friendly interface
                        that not only looked good, but also directly reflected the needs and feedback gathered during the initial research phase.
                    </p>
                </div>

                <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black">Process</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                        sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet.
                    </p>
                    <div className="bg-dot-pattern relative inset-0 z-0 mt-4 h-[35rem] w-full overflow-hidden rounded-xl border-1 border-black bg-[#FFF7E2]">
                        <Photos />
                    </div>
                </div>
                <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black">Results</h1>
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
