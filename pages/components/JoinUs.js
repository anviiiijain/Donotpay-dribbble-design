const JoinUs=()=>{
    const titles=['Communication Coordination','Data Science','Development Support Engineer','Sales Finance Leader']
    return(
        <div className="my-32">
            <div className="mx-auto text-center w-3/12 "> 
                <div className="text-sm font-semibold text-gray-600">What are you waiting for..</div>
                <div className="text-2xl font-bold">Interested in joining us?</div>
            </div>
            <div className="w-2/5 mx-auto my-10 "> 
                <div className="flex justify-between  items-center bg-smoke my-3 px-4 py-2 rounded">
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">Communications Coordinator</div>
                        <div className="text-xs text-gray-600 ml-5">San Francisco</div>
                    </div>
                    <div>{`-`}</div>
                </div>
                <div className="flex justify-between  items-center bg-smoke my-3 px-4 py-2 rounded">
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">Data Scientist</div>
                        <div className="text-xs text-gray-600 ml-5">San Francisco</div>
                    </div>
                    <div>{`-`}</div>
                </div>
                <div className="flex justify-between  items-center bg-smoke my-3 px-4 py-2 rounded">
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">Developer Support Engineer</div>
                        <div className="text-xs text-gray-600 ml-5">San Francisco</div>
                    </div>
                    <div>{`-`}</div>
                </div>
                <div className="flex justify-between  items-center bg-smoke my-3 px-4 py-2 rounded">
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">Sales Finances Leader</div>
                        <div className="text-xs text-gray-600 ml-5">San Francisco</div>
                    </div>
                    <div>{`-`}</div>
                </div>
            </div>
            <div className="w-80 text-xs text-center text-gray-500 font-semibold mx-auto">
                <div>Don't find a position that fits you?Don't wory you can send us your CV and we will review it with our team ASAP</div>
                <div className="text-white bg-pink px-4 py-2 my-3 w-20 rounded mx-auto">Send CV</div>
            </div>
        </div>
    )
}

export default JoinUs