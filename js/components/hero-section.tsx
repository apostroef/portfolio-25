import RotatingText from './animated-rounded-text';
import { ButtonHero } from './button-hero';
const textProp = [
    { text: 'UI/UX Designer', bgColor: 'bg-[#F4D68D]' },
    { text: 'Video Editor', bgColor: 'bg-[#B3AB2C]' },
    { text: 'Graphic Designer', bgColor: 'bg-[#D24C19]' },
];
export function HeroSection() {
    return (
        <>
            <div className="mt-16 px-4 py-4 md:mt-24 md:px-16 md:py-8 lg:mt-60 xl:mt-40 selection:bg-[#D2E09A]">
                <div className="grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-[18rem_15rem_28rem] lg:justify-center items-center justify-center lg:gap-x-8 xl:grid-cols-[20rem_15rem_30rem]">
                    <h1 className="items-center justify-center flex font-creato text-[2.5rem] text-black md:flex md:items-end md:justify-end md:text-[4rem]">
                        {' '}
                        Hi, I am{' '}
                    </h1>
                    <div className="relative left-1/8 md:left-0 h-[3rem] w-[10rem] flex-shrink-0 md:h-[3rem] md:w-[11.75rem] lg:h-[4rem] lg:w-[15rem]">
                        <img className="absolute top-[-0.5rem] right-[-0.5rem] z-10 h-[3rem] w-[4rem]" src="/images/sparkles.gif"></img>
                        <img className="absolute inset-0 z-0 h-full w-full" src="/images/ibra-c.png"></img>
                    </div>
                    <h1 className="font-creato text-[2.5rem] font-bold text-black md:col-span-2 flex items-center justify-center md:text-[4rem] lg:col-span-1 lg:justify-start">
                        {' '}
                        Ibra Cardine
                    </h1>
                </div>
                <div className="mt-[-1rem] items-center justify-center grid grid-cols-[10rem_10rem] gap-x-2 md:grid-cols-2 md:gap-x-8">
                    <h1 className="text-[3rem] text-black italic md:text-[4rem]">
                        {' '}
                        <span className="font-serif text-[2rem] italic md:flex md:items-center md:justify-end md:text-[4rem]">Passionate</span>
                    </h1>
                    <div className="flex items-center justify-start">
                        <RotatingText
                            texts={textProp}
                            intervalTime={2200}
                            className="flex h-[2.5rem] w-[12rem] items-center justify-center rounded-[1rem] px-3 text-center md:h-[4rem] md:w-[20rem]"
                            textClassName="justify-center flex text-black font-creato text-[1rem] md:text-[2rem]"
                        />
                    </div>
                </div>
                <div className="flex-col flex items-center justify-start py-2 mt-[1rem] md:mt-0 md:items-center md:justify-center md:py-6">
                    <p className="text-center">3rd year Information System student, Universitas Airlangga</p>
                    <p className="text-center">
                        Have been doing design for 5+ years. Based in <span className="line-through">Denpasar</span>, Surabaya | ID
                    </p>
                </div>
                <div className="mt-[2rem] md:mt-0">
                    <ButtonHero />
                </div>
            </div>
        </>
    );
}
