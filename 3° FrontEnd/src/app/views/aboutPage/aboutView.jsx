import React, { useEffect, useState } from 'react';
import styles from './aboutStyle.module.css';
import {Link} from "react-router-dom";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FavoriteListComponent from '../../components/features/favoriteListComponent/favoriteListScript';
import AboutSplideComponent from '../../components/_main/aboutSplideComponent/aboutSplideView';

const AboutViewComponent = () => {

    const [windowScreen, setWindowScreen] = useState(false)

    useEffect(()=> {
        setWindowScreen(window.innerWidth <= 1250)
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1250) {
                setWindowScreen(true)
            }
            else {
                setWindowScreen(false)
            }
        })
    }, [])

    return (
        <div id={styles.aboutPage}>
            <div>
                <div id={styles.aboutCentral}>
                    <div>
                        <div id={styles.getBack}>
                            <Link to="/">
                                <div className='iconBack'>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </div>
                            </Link>
                        </div>
                        <h1>About</h1>
                    </div>
                </div>
            </div>
            <span>
                { windowScreen ? (
                    <AboutSplideComponent />
                ) : (
                    <>
                        <div id={styles.mainContainer}>
                            <div>
                                <div id={styles.leftContainer}>
                                    <div>
                                        <h3>Wellington Pessoa de Lima Filho</h3>
                                        <div>
                                        I am currently a graduate from the Federal Institute of Paraíba (IFPB). 
                                        I still have much to learn, but I know I am on the right path. 
                                        I am confident that I will meet amazing people and learn a great deal from them, 
                                        just as they will from me. My field involves software development, 
                                        and even though I may not have extensive experience, 
                                        I believe I am capable of pursuing what is relevant and fascinating to me.
                                        </div>
                                        <a href='https://drive.google.com/file/d/1nyRhUYTHKsw6IyxWUqKotTsbomLNaPPj/view?usp=drive_link' target='_blank'>resume</a>
                                    </div>
                                    <FavoriteListComponent />
                                </div>
                                <div id={styles.rightContainer}>
                                    <div id={styles.video}>
                                        <iframe src="https://www.youtube.com/embed/0lbzmZeS-BY" controls></iframe>
                                    </div>
                                    <div>
                                        <div>
                                            <h4>Fatos Aleatórios</h4>
                                            <div>
                                            In addition to being a programmer, &nbsp;&nbsp;&nbsp;
                                            I also have a great passion for drawing, music, and theater. 
                                            One of my hobbies is exercising every early morning, 
                                            while I use the evenings to study new languages in which I am interested.
                                            </div>
                                        </div>
                                        <div id={styles.desktop}></div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </>
                )}
            </span>
        </div>
    );
};

export default AboutViewComponent;
