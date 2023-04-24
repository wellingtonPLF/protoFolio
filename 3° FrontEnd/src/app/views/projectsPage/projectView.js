import React from 'react';
import './style.css';
import Lista2x2Component from '../../components/features/lista2x2Component/lista2x2Component';
import MenuComponent from '../../components/features/menuComponent/menuComponent';

const ProjectViewComponent = (props) => {

    return (
        <div id="projects">
            <div id="namePlate">
                <div>Projects</div>
                <MenuComponent />
            </div>
            <div id="bodyProject">
                <Lista2x2Component />
                <div>imagem</div>
            </div>
        </div>
    );
};

export default ProjectViewComponent;
