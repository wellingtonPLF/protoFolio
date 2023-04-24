import React, {useState} from 'react';
import './style.css';
import EmailComponent from "../../components/main/emailComponent/emailComponent";
import {faAngleLeft, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import desenho from './../../../assets/pictures/programing.png'
import {Link} from "react-router-dom";

const ContactViewComponent = (props) => {

    return (
        <div style={{backgroundColor: "white"}}>
            <div className={'contact'}>CONTACT ME BABY</div>
            <div className={'body'}>
                <div className={'greenLayer'}></div>
                <div className={"blackLayer"}>
                    <div id={'upLayer'}>
                        <div  id={'goingBack'}>
                            <Link to="/">
                                <div id={'iconBack'}>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <FontAwesomeIcon icon={faAngleLeft} style={{position: "relative", right: "3px"}} />
                                </div>
                            </Link>
                        </div>
                        <div id={'phrase'}>
                            <div id={'title'}>Frase do Ano</div>
                            <div>"Se você não entende as regras do jogo, você nunca vai vence-lo."</div>
                            <div id={'date'}>27 de Março por Wellington Pessoa</div>
                        </div>
                        <div id={'maps'}>
                            <div style={{height: "100%"}}>
                                <div id={'loadMaps'}>
                                    <div id={'load'}></div>
                                </div>
                                <div id={'googleMaps'}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.
                                        8967187535613!2d-34.876050485497906!3d-7.137940871995538!2m3!1f0!
                                        2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81770238975%3A0x
                                        6576bd0e9cc4f6e8!2sR.%20Ademar%20Cabral%20de%20Medeiros%20-%20Lot.
                                        %20Monte%20Cassiano%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058015-650
                                        !5e0!3m2!1spt-BR!2sbr!4v1648465577975!5m2!1spt-BR!2sbr"
                                        width="245"
                                        height="220"
                                        frameBorder="0"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={'downLayer'}>
                        <div id={'img'}>
                            <img src={desenho}/>
                        </div>
                        <div id={'message'}>
                            <EmailComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactViewComponent;
