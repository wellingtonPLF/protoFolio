
import React, { Component } from 'react';
import FavoriteLanguageView from './favoriteListView';

class FavoriteListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            languages: ["Python", "C#", "Java", "TS"]
        }
    }

    render() {
        return (
            <>
                <FavoriteLanguageView lang={this.state.languages}/>
            </>
        );
    }
}

export default FavoriteListComponent