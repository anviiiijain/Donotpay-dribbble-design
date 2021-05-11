import AppleIcon from '@material-ui/icons/Apple';
import ChatIcon from '@material-ui/icons/ChatBubble';

const Cta=()=>{
    return(
        <div className="bg-smoke rounded-tr-3xl md:rounded-tr-default border-b-2 md:grid grid-cols-2 gap-10 md:gap-20 z-10">
            <div className="hidden lg:flex transform rotate-45 relative right-56 z-10 ">
                <img  className="rounded-2xl h-large mx-5 z-10"  src="./mobile1.jpeg"/>
                <img  className="rounded-2xl h-large mx-5 z-10 bg-gradient-to-t from-smoke " src="./mobile2.jpeg"/>
            </div>
            <div className=" w-4/5 lg:w-2/3 mx-auto py-20 text-center lg:text-left">
                <div className="text-2xl font-extrabold text-gray-800 py-4">
                    <div>Download DoNotPay </div>
                    <div>today and never deal </div>
                    <div>with legal issues again</div>
                </div>
                <div className="text-sm text-gray-600 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </div>
                <div className="text-xs inline-flex w-fit-content mx-auto">
                   
                    <div className=" cursor-pointer bg-gradient-to-tr from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-100 p-2 w-24 rounded m-2 ml-0 font-semibold hover:font-bold text-white  transition-all ease-in">
                        <AppleIcon fontSize="small" />
                        App Store  
                        </div>
                    <div className=" cursor-pointer p-2 w-24 rounded m-2 bg-white text-gray-500 font-semibold">
                        <ChatIcon fontSize="small"/>
                        Text a link
                    </div>
                   
                   
                </div>
            </div>
        </div>
    )
}

export default Cta