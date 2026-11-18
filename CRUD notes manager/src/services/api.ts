import axios from "axios";

const api = axios.create({
    baseURL: 'https://apifyapi.yolio.tn/mock/nkzpg7k6q5to',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
})



export default api;