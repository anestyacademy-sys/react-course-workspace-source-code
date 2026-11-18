import api from './api';


interface Todo {
  id: string;
  text: string;
}

export const todoService = {

    getAll: async () : Promise<Todo[]> =>{
        const response = await api.get('/todo');
        return response.data.data;
    },
    getById : async (id: string) : Promise<Todo> =>{
        const response = await api.get('/todo/' + id);
        return response.data.data;
    },
    create: async (data: Omit<Todo, 'id'>) : Promise<Todo> =>{
        const response = await api.post( '/todo' , data );
        return response.data.data; 
    },
    delete: async (id: string) : Promise<void> =>{
        await api.delete('/todo/' + id);
    },
    // edit: async () : Promise<Todo> =>{

    // }


}
