import React, {useEffect, useState, useCallback} from 'react';
import styles from './contactStyle.module.css';
import EmailComponent from "./../../components/_main/emailComponent/emailScript"
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import desenho from './../../../assets/images/programing.png'
import {Link} from "react-router-dom";

const ContactViewComponent = (props) => {

    const [load, setload] = useState(false)

    const iframStyle = (load) ? {border: "5px dotted white"} : {display: "none"}

    const handleIframeLoad = () => {
        setload(true)
    }

    return (
        <div className={styles.contactView}>
            <div className={styles.contact}>
                <div></div>
                <div>CONTACT ME BABY</div>
            </div>
            <div className={styles.body}>
                <div className={styles.greenLayer}></div>
                <span>
                    <div className={styles.blackLayer}>
                        <div id={styles.upLayer}>
                            <div  id={styles.goingBack}>
                                <Link to="/">
                                    <div id={'iconBack'} style={{marginLeft: "100px"}}>
                                        <FontAwesomeIcon icon={faAnglesLeft} />
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </div>
                                </Link>
                            </div>
                            <div id={styles.phrase}>
                                <div id={styles.title}>Frase do Ano</div>
                                <div>"Se você não entende as regras do jogo, você nunca vai vence-lo."</div>
                                <div id={styles.date}>27 de Março por Wellington Pessoa</div>
                            </div>
                            <div id={styles.maps}>
                                <div style={{height: "100%"}}>
                                    {!load && (<div id={styles.loadMaps}>
                                        <div id={styles.load}></div>
                                    </div>)}
                                    <div id={styles.googleMaps}>
                                        <iframe
                                            style={iframStyle}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.
                                            8967187535613!2d-34.876050485497906!3d-7.137940871995538!2m3!1f0!
                                            2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81770238975%3A0x
                                            6576bd0e9cc4f6e8!2sR.%20Ademar%20Cabral%20de%20Medeiros%20-%20Lot.
                                            %20Monte%20Cassiano%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058015-650
                                            !5e0!3m2!1spt-BR!2sbr!4v1648465577975!5m2!1spt-BR!2sbr"
                                            width="245"
                                            height="220"
                                            onLoad={handleIframeLoad}
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={styles.downLayer}>
                            <div id={styles.img}>
                                <img src={desenho}/>
                            </div>
                            <div id={styles.message}>
                                <EmailComponent />
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            {/* <div className={{backgroundColor: "white"}}>x</div> */}
        </div>
    );
};

export default ContactViewComponent;
