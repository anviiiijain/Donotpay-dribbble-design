import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';

const Footer=()=>{
    return(
        <div className="bg-smoke z-20">
            <div className="grid grid-cols-4 md:grid-cols-5 w-2/3 mx-auto md:pt-16 md:pb-5">
            
                <div className="col-span-4 md:col-span-2 text-xs text-gray-600">
                    <div className="font-bold text-lg text-gray-800 py-2 pt-8 md:pt-2">DoNotPay</div>
                    <div className="py-3 pb-8">
                        <div>The DoNotPay app is the home of the world's</div>
                        <div> robot lawyer.fight corporations , beat bureaucracy</div>
                        <div>and sue anyone of the press of a button</div>
                    </div>
                    <div className="py-1">Made in California</div>
                    <div className="py-1">San Francisco</div>
                </div>
                
                <div className="col-span-4 md:col-span-1">
                    <div className=" font-bold text-xs py-2 text-gray-800">QUICK LINK</div>
                    <div className="text-xs text-gray-600">
                        <div className="py-1">Overview</div>
                        <div className="py-1">Invite Friends</div>
                        <div className="py-1">Contact Us</div>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1">
                    <div className=" font-bold text-xs py-2 text-gray-800">LEGAL</div>
                    <div className="text-xs text-gray-600">
                        <div className="py-1">Terms of use</div>
                        <div className="py-1">Privacy Policy</div>
                        <div className="py-1">Report a problem</div>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1">
                    <div className=" font-bold text-xs py-2 text-gray-800">CONTACT</div>
                    <div className="text-xs text-gray-600">
                        <div className="py-1">180 Suite 201</div>
                        <div className="py-1">California</div>
                        <div className="underline text-purple-50 font-semibold py-1 cursor-pointer">support@donotpay.com</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between text-xs text-gray-600 w-2/3 mx-auto py-5 items-center">
                <div>??2020 donotpay | All rights reserved</div>
                <div className="flex items-center text-white ">
                    <div className="cursor-pointer m-1 rounded-full shadow p-1.5 bg-purple-200 hover:p-2 trasition-all ease-in-out">
                        <InstagramIcon fontSize="small"/>
                    </div>
                    <div className="cursor-pointer m-1 rounded-full shadow p-1.5 bg-blue-500 hover:p-2 trasition-all ease-in-out">
                        <TwitterIcon fontSize="small"/>
                    </div>
                    <div className="cursor-pointer m-1 rounded-full shadow p-1.5 bg-purple-50 hover:p-2 trasition-all ease-in-out">
                        <AppleIcon fontSize="small"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer