import axios from "axios";

class EmailService {

    constructor() {
        this.api = axios.create({ baseURL: 'http://localhost:8081/email'})
    }

    async listar(){
        const { data } = await this.api.get('/');
        return data;
    }

    async inserir(usuario){
        const { data } = await this.api.post('/', usuario);
        return data;
    }

    async remover(id){
        const { data } = await this.api.delete(`/${id}`);
        return data;
    }

    async pesquisarPorId(id){
        const { data } = await this.api.get(`/${id}`);
        return data;
    }

    async atualizar(usuario){
        const { data } = await this.api.put('/', usuario);
        return data;
    }
}

export default new EmailService();
