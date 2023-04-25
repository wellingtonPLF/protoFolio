import React from 'react';
import styles from './favoriteListStyle.module.css'

const FavoriteListView = (props) => {
    return (
        <div id={styles.lang}>
            <span>
                {
                    props.lang.map( (element, index) => (
                        <div id={styles.element} key={index}>{element}</div>
                    ))
                }
            </span>
            <span>
                {
                    props.lang.map( (element, index) => (
                        <div id={styles.element} key={index}>{element}</div>
                    ))
                }
            </span>
        </div>
    );
};

export default FavoriteListView;