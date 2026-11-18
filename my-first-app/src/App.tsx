
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";


function App() {

  const greet = (name: string) : void =>{
    alert(`Hello ${name}`);
  }

  const greetingList = [
    {
      name:"Amine jbali",
      age: 22,
      status: false
    },
    {
      name:"Emna ben ahmed",
      age: 29,
      status: true
    },
    {
      name:"Salma ben salem",
      age: 17,
      status: true
    },
    {
      name:"Karim",
      age: 22,
      status: false
    }
  ]


  return (
    <div className="min-h-screen flex flex-col" >
        <Header />

        <main className="flex-1 p-8" >
          <UserStatus username="Ahmed ben ahmed" isLoggedIn={false} />

          {
            greetingList.map( ( g, i )=>{

              return (
                <Greeting key={i} onGreet={greet} name={g.name} age={g.age} status={g.status} />
              )

            } )
          }
          
      
        </main>

        <Footer />
    </div>
  )
  
}


export default App;


