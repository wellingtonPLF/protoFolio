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
                                            Atualmente sou graduado pelo Instituo Federal da Paraíba (IFPB), 
                                            ainda tenho muito o que aprender, mas sei que estou no caminho certo, 
                                            tenho certeza de que irei conhecer pessoas incríveis e que aprenderei 
                                            muito com elas e elas comigo. A minha área envolve desenvolvimento de 
                                            software e mesmo não possuindo tanta experiência sei que sou capaz de
                                            ir atrás daquilo que é relevante e que me fascina.
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
                                                Além de programador, tenho grande paixão por desenho, música e teatro. 
                                                Um dos meus passatempos é me exercitar todas as manhãs bem cedo, enquanto 
                                                aproveito as noites para estudar novas línguas no qual tenho
                                                interesse.
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
