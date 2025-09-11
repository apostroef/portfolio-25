import React from "react";

interface ProjectSection{
SectionTitle: string;
SectionBody: React.ReactNode;
}
export const ProjectSection : React.FC<ProjectSection> =({SectionTitle, SectionBody}) => {
return (<>
<div className="mt-4 items-start overflow-hidden">
                    <div className="flex h-auto flex-col items-start justify-start">
                        <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">{SectionTitle}</h1>
                        <div className="flex flex-col items-start md:items-center justify-center">
                            {SectionBody}
                        </div>
                    </div>
                </div>
</>)}