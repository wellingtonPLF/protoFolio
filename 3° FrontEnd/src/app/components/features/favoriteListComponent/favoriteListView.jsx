import React from 'react';
import styles from './favoriteListStyle.module.css'
import {faReply} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FavoriteListView = (props) => {
    return (
        <>
            <div id={styles.lang}>
                <span>
                    {
                        props.lang_1.map( (element, index) => (
                            <div className={styles.element} key={index}>{element}</div>
                        ))
                    }
                </span>
                <span>
                    {
                        props.lang_2.map( (element, index) => (
                            <div className={styles.element} key={index}>{element}</div>
                        ))
                    }
                </span>
            </div>
            <div id={styles.favLang}>
                <FontAwesomeIcon icon={faReply} />
                <div>Favorite Languages</div>
            </div>
        </>
    );
};

export default FavoriteListView;