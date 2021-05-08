const Hero=()=>{
    return(
        <div className="h-screen bg-blue-200 rounded-bl-default  bg-gradient-to-tr from-violet via-pink to-red-500 ">
            <div className="w-2/3 h-full mx-auto grid grid-cols-2 items-center gap-24">
                <div className="text-white flex-1 ">
                    <div className="font-bold text-5xl leading-tight">Work where</div>
                    <div className="font-bold text-5xl leading-tight"> you love.</div>
                    <div className="text-sm leading-relaxed py-5 pr-24">Want to join an exciting,dynamic team working on the legal side of things inside tech?</div>
                    <div className="text-xs bg-pink px-4 py-2 my-3 w-24 rounded">Find a Role</div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="rounded-full overflow-hidden my-5 transform -rotate-12 w-60 h-36 shadow-2xl"><img  src="./hero2.jpg"/></div>
                    <div className="rounded-full overflow-hidden my-5 transform -rotate-12 w-80 h-40 shadow-2xl"><img  src="./hero2.jpg"/></div>
                </div>
            </div>
        </div>
    )
}

export default Hero