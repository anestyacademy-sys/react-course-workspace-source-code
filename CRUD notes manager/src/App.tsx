import { useEffect, useState } from "react"
import type { Note } from "./types/Note";
import { noteService } from "./services/noteService";
import Swal from "sweetalert2";


function App() {

  const [ notes, setNotes ] = useState<Note[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);


  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ color , setColor ] = useState('black');
  const [ editingId, setEditingId ] = useState<string | null>(null);

  useEffect( ()=>{
      const fetchNotes = async ()=>{
         try {
            setLoading(true);
            const notes = await noteService.getAll();
            setNotes(notes);
            setLoading(false);
          } catch (error) {
            setLoading(false)
            setError('failed to load notes')
            console.log(error);
            
          }
      }

      fetchNotes();
   

  }, [])

  const handleCreate = async()=>{

    try {

      const note = await noteService.create( { title , content, color } )
      setNotes(prev=>[ note, ...prev ]);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

      setTitle('');
      setContent('');
      setColor('black');

    } catch (error) {
      setError('failed create note')
      console.log(error);
      
    }

  }

  const handleDelete = async (id: string) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
     
      if(result.isConfirmed){
         try {

          await noteService.delete(id);
          setNotes(prev=>prev.filter(note => note.id !== id));

        } catch (error) {
          setError('failed to delete');
          console.log(error);
        }
      }

    });
   
  }

  const handleEdit = (note : Note)=>{
    setContent(note.content);
    setTitle(note.title);
    setColor(note.color);
    setEditingId(note.id);
  }


  const save = async ()=>{
    try {
      
      if(editingId) {
        const res = await noteService.update(editingId, { title, content, color });
        setNotes(prev => prev.map(n=> n.id === editingId ? res : n));

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        setContent('');
        setTitle('');
        setColor('');
        setEditingId(null);
      }

    } catch (error) {
      setError('failed to update');
      console.log(error);
      
    }
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" >

      {/* top bar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200" >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-3" >
          <div className="h-9 w-9 rounded-lg bg-yellow-400 flex items-center justify-center text-lg shadow-sm">📝</div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-slate-800" >My notes</h1>
            <p className="text-xs text-slate-500" > { notes.length } { notes.length === 1 ? 'note' : 'notes' } </p>
          </div>
        </div>
      </header>

      { loading && <p className="text-center p-8" > loading data ... </p> }

      {
        error && (
          <div className="bg-red-100 text-red-700 border border-red-400 p-3 rounded mb-4" >
              { error }
              <button className="ml-auto font-bold" onClick={()=>setError(null)} >x</button>
          </div>
        )
      }


      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8" >

        <aside className="lg:sticky lg:top-24 self-start bg-white rounded-2xl border p-5 space-y-3" >
            <h2 className="font-bold text-lg" > { editingId ? 'Edit note' : 'New Note' } </h2>

            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="border rounded-lg px-3 py-2 w-full text-sm"  />
            <textarea placeholder="content" value={content}  onChange={(e)=>setContent(e.target.value)} className="border rounded-lg px-3 py-2 w-full text-sm"  ></textarea>
            <input type="color" placeholder="title" value={color} onChange={(e)=>setColor(e.target.value)} className="h-9 w-14 rounded-lg cursor-pointer"  />

            <div>
              {
                editingId ? (
                <>
                  <button className="mt-4 px-3 py-2 bg-blue-600 text-white rounded w-32" onClick={save} >Edit</button>
                  <button className="mt-4 px-3 py-2 bg-red-600 ml-3 text-white rounded w-32" onClick={()=>setEditingId(null)} >Cancel</button>
                </>
                  
                ) : (
                  <button className="mt-4 px-3 py-2 bg-blue-600 text-white rounded w-32" onClick={handleCreate} >Create</button>
                )
              }
            </div>
        </aside>

      {/* LIST */}
      {
        notes.length === 0 ? (
          <p className="text-gray-600 text-center py-8" >No notes yet</p>
        ): (
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
            {
              notes.map(note=>(
                <div key={note.id}  className={`group relative mb-5 break-inside-avoid rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition overflow-hidden`} style={{'backgroundColor': note.color}}  >
                   <div  className="bg-white/70 backdrop-blur-sm p-4 h-full">
                     <h3 className="font-bold text-lg mb-2" >{note.title}</h3>
                      <p className="text-gray-700 mb-3" > { note.content } </p>

                      <div className="flex gap-2" >
                          <button className="text-blue-600 text-sm hover:text-blue-800" onClick={()=>handleEdit(note)} >edit</button>
                          <button className="text-red-600 text-sm hover:text-red-800" onClick={()=>handleDelete(note.id)} >delete</button>
                      </div>
                   </div>
                </div>
              ))
            }
          </div>
        )
      }
      </main>





    </div>
  )
}

export default App

