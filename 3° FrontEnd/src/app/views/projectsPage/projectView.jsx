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
                                            Creating a personalized solution tailored to your specific technical specifications.
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faRocket} />
                                        </div>
                                        <h4>SEO optimization</h4>
                                        <div>
                                            Conduct a comprehensive website audit, implement technical enhancements, and craft optimized meta tags.
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faLayerGroup} />
                                        </div>
                                        <h4>API Integration</h4>
                                        <div>
                                            Applying an excellent understanding of REST architecture 
                                            to skillfully design integrations with various APIs 
                                            or to create a new API with efficiency.
                                        </div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faWandMagicSparkles} />
                                        </div>
                                        <h4>DataAnalyse</h4>
                                        <div>Transforming complex data into easily understandable graphics and statistics for a more intuitive and insightful visualization.</div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faLaptopCode} />
                                        </div>
                                        <h4>Responsive</h4>
                                        <div>Designs optimized for seamless functionality on devices of all sizes, whether large or small.</div>
                                    </div>
                                    <div>
                                        <div id={styles.icon}>
                                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                                        </div>
                                        <h4>Maintainance</h4>
                                        <div>
                                            Facilitating seamless updates and enhancements for the entire application, guaranteeing its continuous relevance and user-friendly experience.
                                        </div>
                                    </div>
                                </div>
                                <h4>
                                    "As a Frontend developer, my objective as an employee is to craft interfaces that precisely align with the requirements of both the client and their users."
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
                                    <p>My Web Development Tools for Crafting Exceptional Websites</p>
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
