
import React, { Component } from 'react';
import FavoriteLanguageView from './favoriteListView';

class FavoriteListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            fav_1: ["Python", "C#", "Java", "TS"],
            fav_2: ["SQL", "C++", "Kotlin", "Swift"]
        }
    }

    render() {
        return (
            <>
                <FavoriteLanguageView lang_1={this.state.fav_1} lang_2={this.state.fav_2}/>
            </>
        );
    }
}

export default FavoriteListComponent