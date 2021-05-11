const PerksCard = ({title,icon,color,i})=>{
    console.log(icon)
    return (
        <div className="bg-white px-9 py-6 text-center cursor-pointer">
            <div className={`shadow rounded-full p-2 w-12   mx-auto ${color}`}>
                {icon}
            </div>
            <div className="font-bold mb-3  text-gray-800">{title}</div>
            <div className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
    )
}
export default PerksCard