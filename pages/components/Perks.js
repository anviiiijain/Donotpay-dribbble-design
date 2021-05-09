import PerksCard from './PerksCard'
const Perks=()=>{
    const theperks=['Great team','Real Impact','Benefits','Dynamic workspaces','Education','Relationships']
    return(
        <div className=" mx-auto my-16 md:my-20">
            <div className="mx-auto text-center w-11/12 md:w-2/3 "> 
                <div className="text-sm font-semibold text-gray-600 my-3">The Perks</div>
                <div className="text-2xl font-bold  text-gray-800">
                    <div>Benefits to make employee wellness,professional {`&`} </div>
                    <div>personal growth</div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col w-11/12 md:w-2/3 mx-auto my-10 ">
                {theperks.map((perk,i)=>(
                    <PerksCard title={perk}/>
                ))}
            </div>
        </div>
    )
}

export default Perks