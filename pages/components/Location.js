import FavoriteIcon from '@material-ui/icons/Favorite';

const Location=()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-11/12 lg:w-2/3 mx-auto my-32 items-center">
            {/* image grid */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-6 gap-5">
                <img className=" rounded transition-all ease-in hover:scale-105 grayscale hover:grayscale-0 col-span-2 col-start-2" src="./location1.jpg"/>
                <img className=" rounded transition-all ease-in hover:scale-105 grayscale hover:grayscale-0 col-span-3 self-end" src="./location2.jpg"/>
                <img className=" rounded transition-all ease-in hover:scale-105 grayscale hover:grayscale-0 col-span-4 " src="./location3.jpg"/>
                <img className=" rounded transition-all ease-in hover:scale-105 grayscale hover:grayscale-0 col-span-2" src="./images.jpg"/>
            </div>
            <div className="order-first md:order-last">
                <div className="mx-auto text-center md:text-left " > 
                    {/* icons */}
                    <div className="shadow rounded-full p-2 w-12   mx-auto md:mx-0 text-pink">
                        <FavoriteIcon />
                    </div>
                    {/*  content */}
                    <div className="text-sm font-semibold text-gray-600">Location</div>
                    <div className="text-2xl font-bold  text-gray-800">Office in the<span className="text-pink"> heart</span> of san francisco</div>
                    <div className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
                </div>
            </div>
        </div>
    )
}

export default Location