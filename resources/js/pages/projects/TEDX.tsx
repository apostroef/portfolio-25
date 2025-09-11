import { NavBarProject } from '@/components/projects/navbar-project';
import { ProjectHeader } from '@/components/projects/project-header';
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
                        <p>I contributed in designing responsive Landing Page, Event Page and Ticketing Page along with the system flows</p>
                    </>
                }
                ProjectCover="images/tedx/banner-1.png"
            />
        </>
    );
}
