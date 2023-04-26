import axios from "axios";

class GitHubService {

    constructor() {
        //https://api.github.com/users/wellingtonPLF
        this.listApi = axios.create({ baseURL: 'https://api.github.com/users/wellingtonPLF/repos?page=1&per_page=100'})
        this.SingleApi = axios.create({ baseURL: 'https://api.github.com/repos/wellingtonPLF'})
        //this.RepoApi = axiso.create({ baseURL: import.meta.env.GITHUB_API_REPO_URL })
        //this.UserApi = axiso.create({ baseURL: import.meta.env.GITHUB_API_USER_URL })
    }

    async listAll(){
        const { data } = await this.listApi.get('/');
        return data;
    }

    async listMains(){
        const projects = [
            'MyIndividualManagement',
            'SalesWebMVC',
            'reactQueryAppPD',
            'ReactMovieFrontEnd'
        ]
        const result = await Promise.all(
            projects.map(async (project) => {
              const { data } = await this.SingleApi.get(`/${project}`);
              return data
            })
        );
    
        return result
    }
}

export default new GitHubService();
