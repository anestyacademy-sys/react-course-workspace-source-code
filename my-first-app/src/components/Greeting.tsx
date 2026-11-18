
interface GreetingProps {
    name: string;
    age?: number;
    onGreet: (name: string) => void;
    status: boolean
}


function Greeting( { name, age , onGreet , status } : GreetingProps ){

    return(
        <div className="p-4 bg-blue-50 rounded mb-2" >

            { status ? "🟢 Online" : "🔴 Offline" }

            <h1 className="text-xl font-bold" > Hello, { name } </h1>
            
            { age && <p>Your are {age} years old!  </p>  }

            <button onClick={ ()=>onGreet(name) } className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-2xl font-bold" > Say Hello </button>
        </div>
    )

}

export default Greeting;


