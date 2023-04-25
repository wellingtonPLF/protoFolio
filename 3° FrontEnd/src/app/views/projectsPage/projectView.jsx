import React from 'react';
import styles from './projectStyle.module.css';
import {Link} from "react-router-dom";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SquareListComponent from './../../components/features/squareListComponent/squareListScript';
import CircleListComponent from './../../components/features/circleListComponent/circleListScript';
import desenho from './../../../assets/images/programing.png'

const ProjectViewComponent = (props) => {

    return (
        <div id={styles.projects}>
            <span>
                <div  id={styles.fromProjectToMain}>
                    <Link to="/">
                        <div id={'iconBack'}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                    </Link>
                </div>
                <div id={styles.title}>Projects</div>
            </span>
            <span>
                <div id={styles.projectList}>
                    <SquareListComponent />
                </div>
                <div id={styles.tecnologies}>
                    <div id={styles.outdoor}>
                        <div>
                            <img src={desenho}/>
                        </div>
                        <div>
                            <h2>Top Skills</h2>
                            <p>Web Development Tools To Use for Web Development</p>
                        </div>
                    </div>
                    <div id={styles.skills}>
                        <CircleListComponent />
                    </div>
                </div>
            </span>
        </div>
    );
};

export default ProjectViewComponent;
