import React from 'react';
import styles from './aboutStyle.module.css';
import {Link} from "react-router-dom";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FavoriteListComponent from '../../components/features/favoriteListComponent/favoriteListScript';

const AboutViewComponent = (props) => {

    return (
        <div id={styles.aboutPage}>
            <div id={styles.aboutUpSide}>
                <div id={styles.aboutLeftSide}>
                    <div id={styles.header}>
                        <span>
                            <div id={styles.getBack }>
                                <Link to="/">
                                    <div id={'iconBack'}>
                                        <FontAwesomeIcon icon={faAnglesLeft} />
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </div>
                                </Link>
                            </div>
                            <div id={styles.title}>About</div>
                        </span>
                    </div>
                    <div id={styles.me}>
                        <span>
                            <h3>Wellington Pessoa de Lima Filho</h3>
                            <div id={styles.description}>
                                <div>
                                    Atualmente sou aluno do Instituo Federal da Paraíba (IFPB), 
                                    ainda tenho muito o que aprender, mas sei que estou no caminho certo, 
                                    tenho certeza de que irei conhecer pessoas incríveis e que aprenderei 
                                    muito com elas e elas comigo. A minha área envolve desenvolvimento de 
                                    software e mesmo não possuindo tanta experiência sei que sou capaz de
                                    ir atrás daquilo que é relevante e que me fascina.
                                </div>
                                <a href='https://drive.google.com/file/d/1nyRhUYTHKsw6IyxWUqKotTsbomLNaPPj/view?usp=drive_link' target='_blank'>resume</a>
                            </div>
                        </span>
                    </div>
                </div>
                <div id={styles.aboutRightSide}>
                    <div id={styles.hole}></div>
                    <div id={styles.video}>
                        <iframe src="https://www.youtube.com/embed/0lbzmZeS-BY" controls></iframe>
                    </div>
                </div>
            </div>
            <div id={styles.aboutDownSide}>
                <div id={styles.languages}>
                    <FavoriteListComponent />
                </div>
                <div id={styles.randomFacts}>
                    <div id={styles.facts}>
                        <span>Random Facts</span>
                        <p> 
                            Além de programador, tenho grande paixão por desenho, música e teatro. 
                            Um dos meus passatempos é me exercitar todas as manhãs bem cedo, enquanto 
                            aproveito as noites para estudar novas línguas no qual tenho
                            interesse.
                        </p>
                    </div>
                    <div id={styles.images}>
                        <div id={styles.desktop}></div>
                        {/* <div id={styles.caricatura}></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutViewComponent;
