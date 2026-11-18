import api from "./api";
import type { Note } from "../types/Note";

export const noteService = {

    getAll: async () : Promise<Note[]> =>{
        const response = await api.get('/notes')
        return response.data.data;
    },
    getById: async (id: string) : Promise<Note> =>{

        const response = await api.get('/notes/' + id )
        return response.data.data;
    },
    create: async ( data: Omit<Note, 'id'> ) : Promise<Note> =>{
        const response = await api.post('/notes', data);
        return response.data.data;
    },
    update: async (id: string, data: Omit<Note, 'id'>) : Promise<Note> =>{
        const response = await api.put('/notes/'+id , data);
        return response.data.data;
    },
    delete: async (id: string) : Promise<void> =>{
        await api.delete('/notes/' + id);
    },

}