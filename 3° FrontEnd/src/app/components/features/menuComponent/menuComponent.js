import React from 'react';
import "./style.css"
import {faUser, faHome, faEye, faCube} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div className={"links"}>
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/contact">
                <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/about">
                <FontAwesomeIcon icon={faEye} />
            </Link>
            <Link to="/projects">
                <FontAwesomeIcon icon={faCube} />
            </Link>
        </div>
    );
};

export default MenuComponent;
