import PerksCard from './PerksCard'
import LockIcon from '@material-ui/icons/Lock';
import GroupIcon from '@material-ui/icons/Group';
import LanguageIcon from '@material-ui/icons/Language';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import DomainIcon from '@material-ui/icons/Domain';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const Perks=()=>{
    const theperks=[
        {
            heading:'Great team',
            color:"text-yellow-600",
        },
        {
            heading:'Real Impact',
            color:"text-pink",
        },
        {
            heading:'Benefits',
            color:"text-violet",
        },
        {
            heading:'Dynamic workspaces',
            color:"text-violet",
        },
        {
            heading:'Education',
            color:"text-yellow-500",
        },
        {
            heading:'Relationships',
            color:"text-pink",
        },
    ]

    const icons=[<GroupIcon/>,<LanguageIcon/>,<BatteryStdIcon/>,<DomainIcon/>,<ImportContactsIcon/>,<LocalBarIcon/>,]
    return(
        <div className=" mx-auto my-16 ">
            <div className="mx-auto text-center w-11/12 md:w-2/3 "> 
            {/* icon */}
                <div className="shadow rounded-full p-2 w-12  mx-auto text-pink">
                    <LockIcon />
                </div>
                {/* heading */}
                <div className="text-sm font-semibold text-gray-600 my-3">The Perks</div>
                <div className="text-2xl font-bold  text-gray-800">
                    <div>Benefits to make employee wellness,professional {`&`} </div>
                    <div>personal growth</div>
                </div>
            </div>
            {/* individual cards */}
            <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 md:w-2/3 mx-auto my-10 gap-0.5 ">
                {theperks.map((perk,i)=>
                    {  console.log(icons[i])
                        return(<PerksCard title={perk.heading} icon={icons[i]} color={perk.color}/>)}
                )}
            </div>
        </div>
    )
}

export default Perks