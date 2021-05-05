const Navbar=()=>{
    return(
        <div className="flex justify-evenly items-center w-screen text-white bg-transparent">
            <div className="font-semibold text-lg cursor-pointer">DoNotPay</div>
            <ul className="flex">
                <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Overview</li>
                <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Invite Friends</li>
                <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Careers</li>
                <li className="py-4 px-5 cursor-pointer border-b-2 border-transparent opacity-75 hover:opacity-100 hover:border-white focus:opacity-100 focus:border-white transition-all ">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar