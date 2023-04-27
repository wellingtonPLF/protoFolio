import React from 'react';
import styles from './favoriteListStyle.module.css'

const FavoriteListView = (props) => {
    return (
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
    );
};

export default FavoriteListView;