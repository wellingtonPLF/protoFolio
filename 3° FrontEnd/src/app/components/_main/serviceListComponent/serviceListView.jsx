import React, { useEffect, useState } from 'react';
import styles from './serviceListStyle.module.css'
import {
    faDisplay, faRocket, faLayerGroup, faLaptopCode, faScrewdriverWrench, faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CircleListComponent from './../../features/circleListComponent/circleListScript';
import desenho from './../../../../assets/images/programing.png'
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

const ServiceListViewComponent = () => {

    const [splide, setSplide] = useState();

    useEffect(() => {
        if (splide == undefined) {
            setSplide(
                new Splide('.splide', {
                    type: 'fade',
                    perPage: 1,
                    perMove: 1
                  }).mount()
            )
        }
    }, [])

    return (
        <div id={styles.expertiseComponent}>
            <div id={styles.grab} className="splide" role="group" style={{width: '100%'}} aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide">
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
                                                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                                                </div>
                                                <h4>DataAnalyse</h4>
                                                <div>Complex data into a new way to visualize and understanding it by easy graphics statistcs</div>
                                            </div>
                                            <div>
                                                <div id={styles.icon}>
                                                    <FontAwesomeIcon icon={faLaptopCode} />
                                                </div>
                                                <h4>Responsive</h4>
                                                <div>
                                                    Designs optimized for seamless functionality on devices of all sizes, whether large or small.
                                                </div>
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
                            </li>
                            <li className="splide__slide">
                                <div id={styles.tecnologies}>
                                    <div id={styles.outdoor}>
                                        <div>
                                            <img src={desenho} alt='image'/>
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
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceListViewComponent;
