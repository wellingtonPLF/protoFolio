
import React from 'react';
import styles from './circleListStyle.module.css'

const CircleListView = (props) => {
    return (
        <>
            <div id={styles.skillList}>
                {
                    props.skills.map((element, index) => (
                        <div className={styles.element} key={index}>{element}</div>
                    ))
                }
            </div>
        </>
    );
};

export default CircleListView;