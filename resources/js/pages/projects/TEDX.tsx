import { NavBarProject } from '@/components/projects/navbar-project';
import { ProjectHeader } from '@/components/projects/project-header';
import { XMargin } from '@/components/x-margin-line';

export default function Rwfd() {
    return (
        <>
            <XMargin />
            <NavBarProject ProjectName="projects/TEDX-UA" />
            <ProjectHeader
                ProjectTitle="TedX-UA Official Website"
                ProjectDesc={<>
                <p>3-person UI/UX team</p></>}
                ProjectCover="images/rwfd/rwfd-mockup.png"
            />
        </>
    );
}
