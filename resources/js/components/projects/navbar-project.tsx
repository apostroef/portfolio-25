import React from 'react';

interface NavBarProject {
    ProjectName: string;
    ProjectName2: string;
    link?: string;
}
export const NavBarProject: React.FC<NavBarProject> = ({ ProjectName, link, ProjectName2 }) => {
    return (
        <div className="h-auto w-auto py-8">
            <div className="fixed top-0 right-0 left-0 z-50 h-[3.6rem] w-auto overflow-x-hidden bg-[#fffbed] md:h-[5rem] lg:h-[8rem]">
                <div className="fixed flex h-[3.6rem] w-full flex-row justify-start overflow-hidden px-2 md:h-[5rem] md:justify-start md:gap-x-24 md:px-8 lg:h-[8rem] lg:gap-x-2">
                    <a
                        href="/"
                        className="group relative z-10 mt-[1rem] flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.7rem] hover:font-bold md:mt-[2.3rem] md:w-1/3 lg:mt-[3.6rem] lg:hover:mt-[3rem]"
                    >
                        <h1 className="absolute top-2 left-1/8 z-10 font-creato text-[0.8rem] text-black md:top-1/5 md:text-[1.3rem] lg:top-2/5 lg:text-[1.5rem]">
                            homepage.
                        </h1>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder.svg" />
                    </a>

                    <a
                        href=""
                        className="relative z-20 mt-[-1.8rem] -ml-30 flex h-[10rem] w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:mt-[-2.1rem] hover:font-bold md:mt-[-1.3rem] md:ml-[-50] md:w-1/3 md:hover:mt-[-1.5rem] lg:mt-[1.3rem] hover:lg:mt-[0.9rem]"
                    >
                        <h1 className="absolute top-[3.4rem] left-[8.5%] z-10 font-creato text-[0.8rem] text-black underline md:top-2/5 md:left-[12.5%] md:text-[1.3rem] lg:top-11 lg:text-[1.5rem]">
                            {ProjectName}
                        </h1>
                        <img className="absolute inset-0 z-0 h-full w-full object-contain" src="/images/folder-yellow.svg" />
                    </a>
                    <a
                        href={link}
                        className="group absolute right-10 z-18 mt-[1.5rem] flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.7rem] hover:font-bold md:mt-[2.1rem] md:w-1/3 lg:right-70 lg:mt-[3.5rem] lg:hover:mt-[3rem]"
                    >
                        <h1 className="absolute top-2 left-1/8 z-10 font-creato text-[0.8rem] text-black md:top-1/5 md:text-[1.3rem] lg:top-2 lg:text-[1.5rem]">
                            {ProjectName2}
                        </h1>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder.svg" />
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 z-5 w-full border-t-1 border-black"></div>
            </div>
        </div>
    );
};
