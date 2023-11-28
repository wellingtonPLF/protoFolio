import React from 'react';
import styles from "./menuStyle.module.css"
import {faUser, faHome, faEye, faCube} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div className={styles.links}>
            <Link to="/" >
                <FontAwesomeIcon title='HomePage' icon={faHome} />
            </Link>
            <Link to="/contact">
                <FontAwesomeIcon title='ContactPage' icon={faUser} />
            </Link>
            <Link to="/about">
                <FontAwesomeIcon title='AboutPage' icon={faEye} />
            </Link>
            <Link to="/expertises">
                <FontAwesomeIcon title='Projects' icon={faCube} />
            </Link>
        </div>
    );
};

export default MenuComponent;
