
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const registerSchema = z.object({
  username: z.string().min(3, "username must contain at least 3 char"),
  email: z.string().email("email invalid"),
  password: z.string().min(6, "pwd must contain at least 6 char")
})


type RegisterForm = z.infer<typeof registerSchema>


function App() {


  const { register, handleSubmit , formState: { errors } } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })


  const onSubmit = ( data: RegisterForm ) =>{

    console.log('submiting', data);
    
  }



  return (
    <div className="p-6 bg-white rounded shadow " >
     <h2 className="text-2xl font-bold mb-4" >Forms</h2>

      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}  >

       

        <input type="text" placeholder="username.."  { ...register("username") } className="w-full rounded px-3 py-2 border"  />
        { errors.username && <p className='text-red-500' > { errors.username.message } </p> }
        <input type="email" placeholder="email.." { ...register('email') }   className="w-full rounded px-3 py-2 border"  />
        { errors.email && <p className='text-red-500' > { errors.email.message } </p> }

        <input type="password" placeholder="password.." { ...register('password') }  className="w-full rounded px-3 py-2 border"  />
        { errors.password && <p className='text-red-500' > { errors.password.message } </p> }

        <button type="submit" className="bg-blue-700 text-white rounded px-3 py-2 mt-3" >Submit</button>
      </form>
    </div>
  )
}

export default App


