import axios from "axios";

class GitHubService {

    constructor() {
        this.listApi = 'https://api.github.com/users/wellingtonPLF/repos?page=1&per_page=100'
        this.singleApi = 'https://api.github.com/repos/wellingtonPLF'
        //this.RepoApi = axiso.create({ baseURL: import.meta.env.GITHUB_API_REPO_URL })
        //this.UserApi = axiso.create({ baseURL: import.meta.env.GITHUB_API_USER_URL })
    }

    async listAll(){
        const { data } = await axios.get(`${this.listApi}`);
        return data;
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
              const { data } = await axios.get(`${this.singleApi}/${project}`);
              return data
            })
        );
    
        return result
    }
}

export default new GitHubService();
