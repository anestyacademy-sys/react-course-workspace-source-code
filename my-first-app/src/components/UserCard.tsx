interface userData{
    name: string;
    email: string;
    status: boolean;
    hobbies: string[];
}

function UserCard( { name, email, status, hobbies } : userData ){

    return (
        <div className="border roundedlg p-4 bg-white shadow" >
            <h2 className="text-lg font-bold" > { name } </h2>
            <p className="text-gray-600" > { email } </p>
            <span className={`inline-block px-2 py-1 rounded text-sm  ${ status ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700' } `}  >
                 { status ? 'Active' : 'Inactive' }
                 
            </span>
            <ul className="mt-2 list-disc list-inside">
                {
                    hobbies.map( ( hobbie, i )=><li key={i} > { hobbie } </li> )
                }
            </ul>
        </div>
    )

}


export default UserCard;