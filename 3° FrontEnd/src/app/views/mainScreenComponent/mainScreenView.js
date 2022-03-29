import React from 'react';
import './style.css'
import MenuComponent from "../../components/features/menuComponent/menuComponent";

const MainScreenView = (props) => {

    return (
        <div>
            <div className={'imagem'}>
                <div className={'threeJS'}></div>
                <div className={"menu"}>
                    <MenuComponent />
                </div>
            </div>
            <div className={'subjectProjects'}>SOME OF MY LASTEST WORK</div>
            <div className={'projects'}>
                <div className={'grayLayer'}></div>
                <div className={"mainLayer"}>
                    {
                        props.projects && (
                            <div className={'mainProjects'}>
                                {
                                    props.projects.map( e => (
                                        <span key={e.id}>
                                            <div className={'project'}>
                                                <div>{e.name}</div>
                                            </div>
                                            <div style={{color: "black", marginLeft: "5px"}}>{e.description}</div>
                                        </span>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainScreenView;
