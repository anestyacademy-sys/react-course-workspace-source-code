import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { todoService } from './services/todoService';

interface Todo {
  id: string;
  text: string;
}


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  const [ text, setText ] = useState('');

  useEffect( ()=>{

    const fetchTodos = async ()=>{

      try {
        setLoading(true);
       
        const response = await todoService.getAll();

        setTodos( response )
        console.log(todos);
        
      } catch (error) {
        console.log(error);
        setError('failed to fetch todos');
      } finally {
        
        setLoading(false);

      }

    }

    fetchTodos();

  } , [] )


  const handleCreate = async ()=>{

    try {
      
      const response = await todoService.create({ text: text })
      setTodos( prev => [response,  ...prev ])
      setText('');

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      console.log(error);
      setError('failed to create todo')
    }

  }

  const handleDelete = async (id: string)=>{
    try {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async () => {
        
        await todoService.delete(id);
        setTodos(prev => prev.filter(t => t.id !== id));
        
      });



    } catch (error) {
      setError('failed to delete todo');
      console.log(error);
    }
  }



  return (
    <div className="p-6 bg-white rounded shadow " >
      
        <h2 className='text-center text-3xl font-bold mb-4' >My Todos</h2>

        {
          error && (
            <div className='bg-red-200 border border-red-400 text-red-800 p-3 rounded mb-4' >
              { error }
              <button className='ml-2 font-bold' onClick={()=>setError(null)} >X</button>
            </div>
          )
        }

        {/* create */}

        <div className='flex gap-2 mb-6' >
          <input type="text" placeholder='what needs to be done ?' onChange={(e)=>setText(e.target.value)} value={text}  className='flex-1 border rounded px-3 py-2 ' />
          <button className='bg-blue-700 text-white px-3 py-2 rounded ml-2' onClick={handleCreate}  >Add</button>
        </div>

        {/* List */}

        { loading && <div className='h-6 w-6 animate-pulse rounded-full bg-gray-300 mx-auto' />  }
        {
          todos.length === 0 ? ( 
            <p className='text-center py-8 text-gray-700' >No todos yet</p>
           ) : (

              <ul className='space-y-2' >
                {
                  todos.map( todo=>(
                    <li key={todo.id} className='bg-white rounded p-3 shadow flex justify-between' > 
                      { todo.text } 
                      <button className='bg-red-600 text-white px-2 py-1 rounded' onClick={()=>handleDelete(todo.id)} >delete</button>
                    </li>
                  ) )
                }
              </ul>

           )
        }
    </div>
  )
}

export default App

