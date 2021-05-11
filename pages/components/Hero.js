const Hero=()=>{
    return(
        <div className="lg:h-screen">
            <div className="h-3/6 lg:h-5/6 rounded-bl-3xl lg:rounded-bl-default  bg-gradient-to-tr from-violet via-pink to-red-500">
                <div className="w-2/3 h-full py-24 mx-auto grid lg:grid-cols-2 items-center gap-24">
                    {/* headline */}
                    <div className="text-white text-center lg:text-left mx-auto">
                        <div className="font-bold text-3xl lg:text-5xl leading-tight">Work where</div>
                        <div className="font-bold text-3xl lg:text-5xl leading-tight"> you love.</div>
                        <div className="text-sm leading-relaxed py-5 lg:pr-24">Want to join an exciting,dynamic team working on the legal side of things inside tech?</div>
                        <div className="text-xs font-semibold bg-pink px-4 py-2 mx-auto lg:mx-0 w-24 rounded cursor-pointer transition-all ease-in-out hover:text-pink hover:bg-white">Find a Role</div>
                    </div>
                    {/* images */}
                    <div className=" hidden lg:flex flex-col items-center  lg:items-start">
                        <div className="rounded-full overflow-hidden my-5 transform -rotate-12 shadow-2xl w-60 h-36 transition-all ease-in-out cursor-pointer hover:scale-105"><img  src="./hero2.jpg"/></div>
                        <div className="rounded-full overflow-hidden my-5 transform -rotate-12 shadow-2xl w-80 h-40 transition-all ease-in-out cursor-pointer hover:scale-105"><img  src="./hero2.jpg"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero