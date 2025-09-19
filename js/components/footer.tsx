export function Footer() {
    return (
        <>
            <div className="mt-[4rem] mb-[2rem]">
                <hr></hr>
                <div className="mt-4 grid w-auto grid-cols-1 items-start justify-start gap-x-2 px-4 md:grid-cols-2 md:px-24 xl:px-64">
                    <h1 className="text-[1.5rem] font-bold text-black md:text-[2rem]">Keep in Contact</h1>
                    <div className="flex flex-col items-start justify-start md:items-end">
                        <p>Linkedin</p>
                        <p>Email</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </>
    );
}
