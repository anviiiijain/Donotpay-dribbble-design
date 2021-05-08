import PerksCard from './PerksCard'
const Perks=()=>{
    const theperks=['Great team','Real Impact','Benefits','Dynamic workspaces','Education','Relationships']
    return(
        <div className=" mx-auto my-32">
            <div className="mx-auto text-center w-2/3 "> 
                <div className="text-sm font-semibold text-gray-600">The Perks</div>
                <div className="text-2xl font-bold  text-gray-800">
                    <div>Benefits to make employee </div>
                    <div>wellness,professional {`&`} </div>
                    <div>personal growth</div>
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 grid-flow-col w-3/5 mx-auto my-10 ">
                {theperks.map((perk,i)=>(
                    <PerksCard title={perk}/>
                ))}
            </div>
        </div>
    )
}

export default Perks