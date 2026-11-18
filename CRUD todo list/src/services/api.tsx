import axios from "axios";

const api = axios.create({
    baseURL: 'https://apifyapi.yolio.tn/mock/7aci6a70eqko',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})


export default api;