import LanguageIcon from '@material-ui/icons/Language';

const Investors=()=>{
    return(
        <div className=" mx-auto w-11/12 md:w-2/3">
            <div className="text-center w-11/12 md:w-2/3 mx-auto"> 
                {/* icon */}
                <div className="shadow rounded-full p-2 w-12   mx-auto text-pink">
                    <LanguageIcon color="#e13a8a"/>
                </div>
                {/* heading */}
                <div className="text-sm font-semibold text-gray-600">Well Trusted</div>
                <div className="text-2xl font-bold text-gray-800">
                    Meet some of our World Class Investors
                </div>
            </div>
            {/* images */}
            <div className="grid grid-cols-3 items-center my-12">
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest1.png"/>
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest2.png"/>
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest3.png"/>
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest4.png"/>
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest5.png"/>
                <img className="w-36 mx-auto transition-all ease-in-out cursor-pointer hover:scale-105" src="./invest6.png"/>

            </div>
        </div>
    )
}

export default Investors