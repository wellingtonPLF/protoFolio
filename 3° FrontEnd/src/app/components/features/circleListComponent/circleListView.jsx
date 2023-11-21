
import React from 'react';
import styles from './circleListStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CircleListView = (props) => {
    return (
        <>
            <div id={styles.skillList}>
                {
                    props.icons.map((element, index) => (
                        <FontAwesomeIcon key={index} className={styles.element} 
                        icon={element.name} style={{color: element.color}}/>
                    ))
                }
                <div className={`${styles.element} ${styles.imgSkill}`} 
                id={styles.jwt}></div>

                <b className={styles.element} id={styles.djangoFramework}>Django</b>
                
                <div className={`${styles.element} ${styles.imgSkill}`} 
                id={styles.springBoot}></div>

                <b className={styles.element} id={styles.netFramework}>.NET</b>

            </div>
        </>
    );
};

export default CircleListView;