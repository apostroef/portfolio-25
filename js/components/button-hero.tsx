export function ButtonHero() {
    return (
        <>
            <div className="relative inset-0 z-0 flex items-center justify-center">
                <button
                    onClick={() => alert()}
                    className="hover:shadow-primary-yellow group relative h-[3rem] w-[10rem] cursor-pointer overflow-hidden rounded-[1rem] bg-[#D24C19] px-4 py-2 shadow-lg transition-all duration-200 ease-in-out hover:bg-[#F4D68D] md:h-[4rem] md:w-[15rem]"
                >
                    <div className="flex items-center justify-center gap-x-2">
                        <div className="absolute inset-0 flex translate-x-0 transform items-center justify-center gap-x-2 opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-[-40%] group-hover:opacity-0">
                            <h1 className="flex justify-center text-[1.5rem] text-white md:text-[1.8rem]"> Contact Me</h1>
                        </div>
                        <div className="absolute inset-0 flex translate-x-[40%] transform items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                            <h1 className="align-center text-[1.5rem] text-white md:text-[1.8rem]"> Contact Me</h1>
                            <img src="/images/rabbit.gif" className="h-[2.5rem] w-[2.5rem] items-center" />
                        </div>
                    </div>
                </button>
                <img src="/images/rumput.svg" className="md absolute top-8 z-10 flex h-[2.2rem] items-center justify-center md:h-[3.2rem]" />
            </div>
        </>
    );
}
