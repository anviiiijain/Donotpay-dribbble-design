const Hero=()=>{
    return(
        <div className="lg:h-4/5 bg-blue-200 rounded-bl-3xl md:rounded-bl-default  bg-gradient-to-tr from-violet via-pink to-red-500 ">
            <div className="w-10/12 lg:w-4/5 h-full mx-auto py-12 pt-24 md:py-16 md:pt-28 lg:grid grid-cols-2 items-center gap-24">
                <div className="text-white text-center lg:text-left mx-auto">
                    <div className="font-bold text-3xl lg:text-5xl leading-tight">Work where</div>
                    <div className="font-bold text-3xl lg:text-5xl leading-tight"> you love.</div>
                    <div className="text-sm leading-relaxed py-5 lg:pr-24">Want to join an exciting,dynamic team working on the legal side of things inside tech?</div>
                    <div className="text-xs bg-pink px-4 py-2 my-3 mx-auto lg:mx-0 w-24 rounded">Find a Role</div>
                </div>
                <div className=" hidden lg:flex flex-col items-center  lg:items-start">
                    <div className="rounded-full overflow-hidden my-5 transform -rotate-12 shadow-2xl w-60 h-36"><img  src="./hero2.jpg"/></div>
                    <div className="rounded-full overflow-hidden my-5 transform -rotate-12 shadow-2xl w-80 h-40"><img  src="./hero2.jpg"/></div>
                </div>
            </div>
        </div>
    )
}

export default Hero