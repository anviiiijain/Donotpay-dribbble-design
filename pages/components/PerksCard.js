const PerksCard = ({title,i})=>{
    return (
        <div className="w-64 px-5 py-3 text-center border-b-2 border-r-2">
            <div className="font-bold mb-3">{title}</div>
            <div className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
    )
}
export default PerksCard