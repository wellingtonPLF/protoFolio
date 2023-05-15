import React, {Component} from 'react';
import MainScreenView from './mainView';
import gitHubService from '../../shared/service/GitHubService';

class MainScreenComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        gitHubService.listMains().then(
            it => {
                // let x = name
                // if(name.length > 12) {
                //     const first12 = name.substring(0, 12);
                //     x = first12 + "..."
                // }
                // const result = [{id, name: x, language, html_url}]
                const result =  it.map((element) => {
                    let {id, name, language, html_url} = element;
                    return {id, name, language, html_url}
                })
                this.setState({
                    projects: result
                })
            }
        )
    }

    render() {
        return (
            <div>
                <MainScreenView projects={this.state.projects}/>
            </div>
        );
    }
}

export default MainScreenComponent;
