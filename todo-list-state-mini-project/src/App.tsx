import { useState } from "react"


interface Todo{
  id: number;
  text: string;
  completed: boolean;
}


function App() {
 
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([])
  

  const addTodo = ()=>{
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos(prev=>[...prev, newTodo]);
    setInput("");
  }

  const toggleTodo = (id: number)=>{

    setTodos( prev=> prev.map(todo=> todo.id === id ? { ...todo, completed: !todo.completed } : todo  ) )

  }

  const deleteTodo = (id: number) =>{

    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="p-6 bg-white rounded shadow" >
     <h2 className="text-2xl font-bold mb-4" >Todo List</h2>

     <div className="flex gap-2 mb-4" >
        <input className="flex-1 border rounded px-3 py-2" placeholder="what needs to be done ?" value={input} onChange={(e)=>setInput(e.target.value)}  type="text" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addTodo} > Add </button>
     </div>

      {
        todos.length === 0 ? (
          <p className="text-gray-500 text-center py-4" >No todos yet :(</p>
        ) : (

          <>
          <p className="text-sm text-gray-500 mb3"> {completedCount} of { todos.length } completed </p>
          <ul className="space-y-2" >
            {
              todos.map(todo=>(
                <li key={todo.id} className="flex justify-between items-center p-3 bg-gray-50 rounded" >
                  <span onClick={()=>toggleTodo(todo.id)} className={`cursor-pointer flex-1 ${ todo.completed ? 'line-through text-gray-400' : '' } `}>
                    { todo.text }
                  </span>

                  <button onClick={()=>deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 ml-3" >Delete</button>
                </li>
              ))
            }
          </ul>
          </>
        )
      }

    </div>
  )
}

export default App
