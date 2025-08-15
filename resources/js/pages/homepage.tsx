import { AboutMe } from '@/components/about-me';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar-folder';
import { ProjectCard } from '@/components/project-card';
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import { Header } from '@/components/ui/header';
import { XMargin } from '@/components/x-margin-line';

export default function homepage() {
    return (
        <>
            <XMargin />
            <div>
                <Navbar />
            </div>
            <div className="h-screen overflow-y-auto">
                <HeroSection />
                <div className="mt-32 h-auto w-auto selection:bg-[#D2E09A]">
                    <hr></hr>
                    <div className="mt-8 h-auto w-auto px-4 md:px-24 xl:px-36">
                        <Header
                            icon="/images/seal.gif"
                            title={
                                <>
                                    {' '}
                                    <span className="font-serif italic">About</span> Me
                                </>
                            }
                            description="GPA 3.79 | 2nd Outstanding Student of Information System 2024"
                        />
                        <AboutMe />
                    </div>
                </div>
                <div className="mt-24 h-auto w-auto">
                    <hr></hr>
                    <div className="mt-8 h-auto w-auto px-4 md:px-24 xl:px-36">
                        <Header
                            icon="/images/crab.gif"
                            title={
                                <>
                                    Pro<span className="font-serif italic">ject</span>s
                                </>
                            }
                            description={
                                <>
                                    Several relevant projects. <span className="font-bold italic">Scroll for more.</span>
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="">
                    <ScrollStack className="h-[40rem] w-auto px-4 md:px-24 xl:px-36">
                        <ScrollStackItem >
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

                <div className="mt-[4rem] mb-[2rem]">
                   <Footer />
                </div>
            </div>
        </>
    );
}
