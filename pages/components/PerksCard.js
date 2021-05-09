const PerksCard = ({title,i})=>{
    return (
        <div className="px-8 py-6 text-center border-b-2 md:border-r-2">
            <div className="font-bold mb-3  text-gray-800">{title}</div>
            <div className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
    )
}
export default PerksCard