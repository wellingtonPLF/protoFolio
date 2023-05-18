import axios from "axios";

class GitHubService {

    constructor() {
        this.repoApi = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_REPO_URL })
        this.userApi = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_USER_URL })

        this.localUserApi = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_LOCAL_USER })
        this.localRepo = axios.create({ baseURL: import.meta.env.VITE_GITHUB_API_LOCAL_REPO })
    }

    async listAll(){
        try {
            // const { data } = await this.repoApi.get('/');
            return data;
        }
        catch(e){
            const { data } = await this.localRepo.get('/');
            return data;
        }
    }

    async listMains(){
        const projects = [
            'MyIndividualManagement',
            'SalesWebMVC',
            'MyJList',
            'ReactMovieFrontEnd'
        ]
        const result = await Promise.all(
            projects.map(async (project) => {
                try{
                    // const { data } = await this.userApi.get(`/${project}`);
                    return data
                }
                catch(e){
                    const { data } = await this.localUserApi.get(`/${project}.json`);
                    return data
                }
            })
        );
        return result
    }
}

export default new GitHubService();
