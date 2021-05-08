const Investors=()=>{
    return(
        <div className=" mx-auto w-2/3">
            <div className="text-center w-2/3 mx-auto"> 
                <div className="text-sm font-semibold text-gray-600">Well Trusted</div>
                <div className="text-2xl font-bold text-gray-800">
                    <div>Meet some of</div>
                    <div> our World Class Investors</div>
                </div>
            </div>
            <div className="grid grid-cols-3 items-center my-12">
                <img className="w-36 mx-auto" src="./invest1.png"/>
                <img className="w-36 mx-auto" src="./invest2.png"/>
                <img className="w-36 mx-auto" src="./invest3.png"/>
                <img className="w-36 mx-auto" src="./invest4.png"/>
                <img className="w-36 mx-auto" src="./invest5.png"/>
                <img className="w-36 mx-auto" src="./invest6.png"/>

            </div>
        </div>
    )
}

export default Investors