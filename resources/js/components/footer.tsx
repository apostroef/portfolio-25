export function Footer() {
    return (
        <>
                <hr></hr>
                <div className="mt-4 grid md:grid-cols-2 items-start justify-start grid-cols-1 gap-x-2 w-auto px-4 md:px-24 xl:px-64">
                    <h1 className="md:text-[2rem] text-[1.5rem] font-bold text-black">Keep in Contact</h1>
                    <div className="flex flex-col md:items-end items-start justify-start">
                        <p>Linkedin</p>
                        <p>Email</p>
                        <p>Instagram</p>
                    </div>
                </div>
        </>
    );
}
