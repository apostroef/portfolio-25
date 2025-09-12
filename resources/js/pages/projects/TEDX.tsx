import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import { ProjectSection } from '@/components/projects/section';
import StickerPeel from '@/components/sticker';
import { XMargin } from '@/components/x-margin-line';
export default function Rwfd() {
    return (
        <>
            <XMargin />
            <NavBarProject ProjectName="projects/TEDX-UA" ProjectName2="projects/RWFD" link="/rwfd" />

            <ProjectHeader
                ProjectTitle={
                    <>
                        TedX-UA <span className="font-serif italic">Official</span> Website
                    </>
                }
                ProjectDesc={
                    <>
                        <p className="mb-4 md:text-center">
                            {' '}
                            3 person-team UI/UX under WebDevelopment division of TEDXUniversitas Airlangga. Event website designed to showcase the
                            event’s theme and ticketing information
                        </p>
                    </>
                }
                ProjectCover="images/tedx/banner.gif"
            />

            <DetailHeader
                Timeline="Aug - Oct, 2024"
                Role="UI/UX Designer"
                Scope="UI/UX, Prototyping, Design System"
                Users="Young Audience, General"
                Tools="/images/rwfd/rwfd-tools.svg"
            />
            <hr></hr>
            <Margin
                body={
                    <>
                        <ProjectSection
                            SectionTitle="Foreword"
                            SectionBody={
                                <>
                                    <p>
                                        The internship was held for <span className="font-bold">3 months </span>with my friends,{' '}
                                        <span className="font-bold">Arya & Hansen</span> with me as the team leader. I was given the responsibility
                                        for <span className="bg-light-green font-bold">UI/UX and Front-End development</span> that includes
                                        translating user needs into technical specifications, designing products using the Design Thinking framework,
                                        creating responsive UI prototypes in Figma, and managing complete project documentation.
                                    </p>{' '}
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <>
                                    <div className="bg-dot-pattern p-2 md:p-16 lg:p-8">
                                        <div className="oveflow-hidden flex h-auto w-full items-center justify-center object-contain">
                                            <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 p-4 md:grid-cols-3 md:gap-x-8 md:py-0 lg:grid-cols-3">
                                                <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                                    <Memo
                                                        number="1"
                                                        memotext="How to fit all the themes?"
                                                        className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                                    />
                                                </div>
                                                <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                                    <Memo
                                                        number="2"
                                                        memotext="How to design efficient ticketing system?"
                                                        className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Results"
                            SectionBody={
                                <>
                                    <div className="overflow-hidden py-8">
                                        <div className="flex flex-col items-center justify-start">
                                            <img src="images/tedx/landing-page-pc.gif" className="h-full w-full object-contain lg:w-[35rem]" />
                                            <p className="p-4 lg:p-8">
                                                I was trusted to shape first impressions through design and interaction in{' '}
                                                <span className="font-bold">Landing Page</span>. Consists of subtheme and event timeline that captures
                                                general information regarding the event.
                                            </p>
                                        </div>
                                        <StickerPeel
                                            imageSrc="images/tedx/stiker-1.png"
                                            width={200}
                                            rotate={0}
                                            peelBackHoverPct={20}
                                            peelBackActivePct={40}
                                            peelDirection={40}
                                            shadowIntensity={0}
                                            lightingIntensity={0.01}
                                            initialPosition={{ x: 100, y: 0 }}
                                        />
                                        <StickerPeel
                                            imageSrc="images/tedx/apple1.png"
                                            width={200}
                                            rotate={0}
                                            peelBackHoverPct={20}
                                            peelBackActivePct={40}
                                            peelDirection={40}
                                            shadowIntensity={0}
                                            lightingIntensity={0.01}
                                            initialPosition={{ x: 100, y: 0 }}
                                        />
                                    </div>{' '}
                                </>
                            }
                        />
                    </>
                }
            />
        </>
    );
}
