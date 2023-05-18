import axios from "axios";

class GitHubService {
    localUserApi = axios.create({ baseURL: 'projetos.json' })
    constructor() {
        this.repoApi = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_REPO_URL })
        this.userApi = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_USER_URL })

        this.localUserApi = axios.create({ baseURL: '' })
        this.localRepo = axios.create({ baseURL: '/projetos.json' })
    }

    async listAll(){
        try {
            const { data } = await this.repoApi.get();
            return data;
        }
        catch(e){
            const { data } = await this.localRepo.get();
            return data;
        }
    }

    async listMains(){
        console.log(this.localUserApi.defaults.baseURL)
        const projects = [
            'MyIndividualManagement',
            'SalesWebMVC',
            'ReactMovieFrontEnd'
        ]
        const indimap = {
            id: 1, 
            name: 'IndiMap', 
            language: 'JavaScript', 
            html_url: 'https://indimap.org/'
        }
        const result = await Promise.all(
            projects.map(async (project) => {
                try{
                    const { data } = await this.userApi.get(`/${project}`);
                    return data
                }
                catch(e){
                    console.log("OK")
                    const { data } = await this.localUserApi.get(`/${project}.json`);
                    return data
                }
            })
        );
        console.log(result)
        result.splice(2, 0, indimap);
        return result
    }
}

export default new GitHubService();
