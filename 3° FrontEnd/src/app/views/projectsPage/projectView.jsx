import React from 'react';
import './projectStyle.css';
import {Link} from "react-router-dom";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SquareListComponent from './../../components/features/squareListComponent/squareListScript';
import CircleListComponent from './../../components/features/circleListComponent/circleListScript';
import desenho from './../../../assets/images/programing.png'

const ProjectViewComponent = (props) => {

    return (
        <div id="projects">
            <span>
                <div id="projectsHeader">
                    <div id="fromProjectToMain">
                        <Link to="/">
                            <div id="iconBack">
                                <FontAwesomeIcon icon={faAnglesLeft} />
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                        </Link>
                    </div>
                    <div id="title">Projects</div>
                </div>
            </span>
            <span>
                <div id="projectList">
                    <SquareListComponent/>
                </div>
                <div id="tecnologies">
                    <div id="outdoor">
                        <div>
                            <img src={desenho}/>
                        </div>
                        <div>
                            <h2>Top Skills</h2>
                            <p>Web Development Tools To Use for Web Development</p>
                        </div>
                    </div>
                    <div id="skills">
                        <CircleListComponent />
                    </div>
                </div>
            </span>
        </div>
    );
};

export default ProjectViewComponent;
