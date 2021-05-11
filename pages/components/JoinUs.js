import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const JoinUs=()=>{
    const titles=['Communication Coordination','Data Scientist','Development Support Engineer','Sales Finance Leader']
    return(
        <div className="my-16 md:my-32">
            <div className="mx-auto text-center w-10/12 "> 
                {/* icon */}
                <div className="shadow rounded-full p-2 w-12   mx-auto text-pink">
                    <PersonAddIcon />
                </div>
                {/* heading */}
                <div className="text-sm font-semibold text-gray-600">What are you waiting for..</div>
                <div className="text-2xl font-bold  text-gray-800">Interested in joining us?</div>
            </div>
            {/* cards */}
            <div className="w-11/12 md:w-2/3 mx-auto my-5 md:my-10 "> 
                {titles.map((title,i)=>(
                    <div className="flex justify-between  items-center bg-smoke my-3 px-4 py-3 rounded cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="text-sm font-semibold  text-gray-800">{title}</div>
                            <div className="text-xs text-gray-600 md:ml-5">San Francisco</div>
                        </div>
                        <ArrowRightAltIcon className="text-gray-600"/>
                    </div>
                ))}
            </div>
            <div className="w-5/6 md:w-96 text-xs text-center text-gray-500 font-semibold mx-auto">
                <div className="py-5 leading-relaxed"> 
                    <div>Don't find a position that fits you?Don't wory you can send us your</div>
                    <div> CV and we will review it with our team ASAP</div>
                </div>
                <div className="text-white bg-pink p-2 md:px-4 md:py-3 my-3 w-20 rounded mx-auto cursor-pointer hover:bg-smoke hover:text-pink">Send CV</div>
            </div>
        </div>
    )
}

export default JoinUs