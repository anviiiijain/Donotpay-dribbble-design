const Navbar=()=>{
    return(
        <div className="bg-transparent w-full text-white absolute top-0 shadow">
            <div className="flex justify-between items-center w-2/3 mx-auto">
                <div className="font-semibold text-lg cursor-pointer">DoNotPay</div>
                <ul className="flex">
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Overview</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Invite Friends</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Careers</li>
                    <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar