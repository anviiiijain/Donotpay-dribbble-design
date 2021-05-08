const Location=()=>{
    return(
        <div className="grid grid-cols-2 gap-24 w-1/2 mx-auto my-20 items-center">
            <div className=" grid grid-cols-6 gap-5">
                <img className="bg-pink rounded  col-span-2 col-start-2" src="./location1.jpg"/>
                <img className="bg-pink rounded  col-span-3 self-end" src="./location2.jpg"/>
                <img className="bg-pink rounded col-span-4 " src="./location3.jpg"/>
                <img className="bg-pink rounded col-span-2" src="./images.jpg"/>
            </div>
            <div>
                <div className="mx-auto text-left" > 
                    <div className="text-sm font-semibold text-gray-600">Location</div>
                    <div className="text-2xl font-bold">Office in the heart of san frrancisco</div>
                    <div className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
                </div>
            </div>
        </div>
    )
}

export default Location