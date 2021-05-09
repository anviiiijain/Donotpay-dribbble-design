const Navbar=()=>{
    return(
        <div className="bg-transparent w-full text-white absolute top-0 shadow">
            <div className="flex justify-between items-center w-10/12 lg:w-2/3 mx-auto">
                <div className="font-semibold text-lg cursor-pointer py-2 md:py-0">DoNotPay</div>
                <ul className="hidden md:flex">
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Overview</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Invite Friends</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Careers</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Contact</li>
                </ul>
                <div className="flex flex-col flex-end md:hidden">
                    <span className="bg-white h-0.5 w-5 my-0.5 "></span>
                    <span className="bg-white h-0.5 w-3 my-0.5 "></span>
                    <span className="bg-white h-0.5 w-5 my-0.5 "></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar