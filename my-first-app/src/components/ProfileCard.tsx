
interface profileProps{
    name: string;
    job: string;
    image: string;
    address: string;
    age?: number;
    clickMe: ()=>void;
}


function ProfileCard( { name, job, image, address, age , clickMe } : profileProps ){

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto  hover:shadow-xl transition " >

            <div className="flex flex-col items-center" >

                <img src={image} alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-500" />

                <h2 className="mt-4 text-xl font-bold text-gray-800" >
                    { name }
                </h2>
                { age && <p> { age } years old </p> }

                <p className="text-blue-600 font-medium" > {job} </p>
                <p className="text-gray-500 text-sm mt-1" > {address} </p>

                <button onClick={clickMe}  className="bg-blue-600 mt-5 px-5 py-2 rounded text-white font-bold" >Test click event</button>
            </div>

        </div>
    );

}


export default ProfileCard;