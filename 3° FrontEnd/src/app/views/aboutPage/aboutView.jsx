import React from 'react';
import styles from './aboutStyle.module.css';
import {Link} from "react-router-dom";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FavoriteListComponent from '../../components/features/favoriteListComponent/favoriteListScript';

const AboutViewComponent = (props) => {

    return (
        <div id={styles.aboutPage}>
            <div id={styles.aboutLeftSide}>
                <div id={styles.header}>
                    <div id={styles.getBack }>
                        <Link to="/">
                            <div id={'iconBack'}>
                                <FontAwesomeIcon icon={faAnglesLeft} />
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                        </Link>
                    </div>
                    <h2 id={styles.title}> &lt;About/&gt;</h2>
                </div>
                <div id={styles.me}>
                    <span>
                        <h3>Wellington Pessoa de Lima Filho</h3>
                        <div id={styles.description}>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat similique, sapiente molestiae recusandae expedita 
                                minima nulla accusantium, maiores voluptates reprehenderit 
                                ea voluptatibus quos sed porro ad? Temporibus aperiam fugiat culpa!
                            </div>
                            <a id={styles.resume} href=''>resume</a>
                        </div>
                    </span>
                </div>
                <div id={styles.languages}>
                    <FavoriteListComponent />
                </div>
            </div>
            <div id={styles.aboutRightSide}>
                <div id={styles.hole}></div>
                <div id={styles.video}>
                    <video controls></video>
                </div>
                <div id={styles.randomFacts}>
                    <div id={styles.facts}>
                        <span>Random Facts</span>
                        <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Repellat odio, reiciendis 
                        id quaerat modi ea, alias accusantium repellendus 
                        nam aut ducimus. Aperiam!</p>
                    </div>
                    <div id={styles.images}>
                        <div id={styles.caricatura}></div>
                        <div id={styles.desktop}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutViewComponent;
