import React, { useEffect, useState } from 'react';
import styles from './projectStyle.module.css';
import {Link} from "react-router-dom";
import {
    faAngleLeft, faAnglesLeft, 
    faDisplay, faRocket, faLayerGroup, faLaptopCode, faScrewdriverWrench, faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CircleListComponent from './../../components/features/circleListComponent/circleListScript';
import desenho from './../../../assets/images/programing.png'
import ServiceListViewComponent from '../../components/_main/serviceListComponent/serviceListView';

const ProjectViewComponent = () => {

    const [windowScreen, setWindowScreen] = useState(false)

    useEffect(()=> {
        setWindowScreen(window.innerWidth <= 1500)
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1500) {
                setWindowScreen(true)
            }
            else {
                setWindowScreen(false)
            }
        })
    }, [])

    return (
        <div id={styles.projects}>
            <div>
                <Link to="/">
                    <div id={styles.iconBack} className='iconBack'>
                        <FontAwesomeIcon icon={faAnglesLeft} />
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                </Link>
            </div>
            <span>
                <div id={styles.projectsHeader}>
                    <div id={styles.title}>My Services</div>
                </div>
            </span>
            <span>
                { windowScreen ? (
                    <ServiceListViewComponent />
                ) : (
                    <>
                        <div id={styles.projectList}>
                            <div>
                                <div id={styles.services}>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faDisplay} />
                                        </div>
                                        <h4>Development</h4>
                                        <div>
                                            Building a custom tailored solution based 
                                            on your technical specification
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faRocket} />
                                        </div>
                                        <h4>SEO optimization</h4>
                                        <div>
                                            Audit your website, perform technical 
                                            improvements and write meta tags
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faLayerGroup} />
                                        </div>
                                        <h4>API Integration</h4>
                                        <div>
                                            Using good unserstanding about rest arquitecture to design effectively
                                            the integration with any api or the creation of one itself
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faLaptopCode} />
                                        </div>
                                        <h4>Responsive</h4>
                                        <div>Layouts that will work on any device big or small</div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faWandMagicSparkles} />
                                        </div>
                                        <h4>DataAnalyse</h4>
                                        <div>Complex data into a new way to visualize and understanding it by easy graphics statistcs</div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                                        </div>
                                        <h4>Maintainance</h4>
                                        <div>
                                            Easy to update and improve the whole application, 
                                            ensuring it remains up to date and user-friendly
                                        </div>
                                    </div>
                                </div>
                                <h4>
                                    "As a Frontend developer, My goal as a employee is to create the right interfaces that
                                    maches the needs from the client and their users"
                                </h4>
                            </div>
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
                    </>
                )}
            </span>
        </div>
    );
};

export default ProjectViewComponent;
