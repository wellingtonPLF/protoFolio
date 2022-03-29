import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './style.css'
import {faGithub, faUnity, faDiscord, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
    return (
        <div className={'footer'}>
            <span>
                <div className={'changeSize_W'}>W</div>
                <div className={'tags'}>
                    <a href="https://play.unity.com" target="_blank">
                        <FontAwesomeIcon icon={faUnity} />
                    </a>
                    <a href="https://www.linkedin.com/in/wellplf/" target="_blank" >
                        <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                    <a href="https://github.com/wellingtonPLF" target="_blank" >
                        <FontAwesomeIcon icon={faGithub} />

                    </a>
                    <a href="https://discord.com" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
            </span>
        </div>
    );
};

export default FooterComponent;
