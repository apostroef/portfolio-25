export function NavbarRwfd() {
    return (
        <div className="fixed top-0 w-auto right-0 left-0 z-50 h-[3.6rem] bg-[#fffbed] md:h-[8rem] overflow-x-hidden">
            <div className="fixed flex h-[3.6rem] w-full flex-row lg:gap-x-2 justify-start overflow-hidden px-2 md:h-[8rem] md:justify-start md:gap-x-24 md:px-8">
                <a
                    href="/"
                    className="group relative z-10 mt-[1rem] flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[2.1rem] hover:font-bold md:mt-[4.3rem] md:w-1/3 lg:mt-[3.6rem]"
                >
                    <h1 className="absolute top-2 left-1/8 z-10 font-creato text-black md:top-1/5 md:text-[1.3rem] lg:top-2/5 lg:text-[1.5rem]">
                        homepage.
                    </h1>
                    <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-yellow.svg" />
                    <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder-plain.svg" />
                </a>

                <a
                    href=""
                    className="relative z-20 mt-[-1.8rem] -ml-35 flex h-[10rem] w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:mt-2 hover:font-bold md:mt-5 md:ml-[-50] md:w-1/3"
                >
                    <h1 className="absolute top-[3rem] left-[12.5%] z-10 font-creato text-black md:top-2/5 md:left-[12.5%] md:text-[1.3rem] lg:top-2/5 lg:text-[1.5rem]">
                        projects/RWFD
                    </h1>
                    <img className="absolute inset-0 z-0 h-full w-full object-contain" src="/images/folder-plain.svg" />
                </a>
            </div>
            <div className="absolute bottom-0 left-0 z-5 w-full border-t-1 border-black"></div>
        </div>
    );
}
