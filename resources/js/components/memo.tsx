interface Memo {
    memotext: string;
    number?: string;
    className?: string;
}

export const Memo: React.FC<Memo> = ({ memotext, number, className }) => {
    return (
        <>
            <div className="h-[8rem] w-[12rem] rounded-lg border-1 border-black/40 bg-[#FFF0CD] p-4 md:h-auto md:w-[8rem] lg:h-[12rem] lg:w-[12rem]">
                <div className={`${className} flex flex-row items-start justify-center gap-x-2 lg:gap-x-2 lg:p-2`}>
                    <h1 className="text-[1rem] text-black lg:text-[1.5rem]">{number}</h1>
                    <p className="font-shine text-[1.7rem] lg:text-[2rem]">{memotext}</p>
                </div>
            </div>
        </>
    );
};
