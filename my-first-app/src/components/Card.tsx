interface CardProps{
    title: string,
    children: React.ReactNode
}


function Card( { title, children } : CardProps ){
    return (
        <div className="bg-white shadow rounded-lg p-4" >
            <h3 className="font-bold mb-2 text-gray-800" > {title} </h3>
            <div>
                { children }
            </div>
        </div>
    )
}


export default Card;