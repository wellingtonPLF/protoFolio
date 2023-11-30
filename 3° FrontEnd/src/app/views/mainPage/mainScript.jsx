import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
import MainScreenView from './mainView';
import gitHubService from '../../shared/service/GitHubService';

const MainScreenComponent = () => {

    const { data, isFetching } = useQuery('projects', () => {
        const response = gitHubService.listMains().then(
            it => {
                const result =  it.map((element) => {
                    let {id, name, language, html_url, img} = element;
                    return {id, name, language, html_url, img}
                })
                return result;
            }
        )  
        return response
    })

    return (
        <div>
            { data && (
                <MainScreenView projects={data}/>
            )}
        </div>
    );
}

export default MainScreenComponent;
