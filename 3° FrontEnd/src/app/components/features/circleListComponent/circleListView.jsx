
import React from 'react';
import styles from './circleListStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jwt from './../../../../assets/images/jwt-logo.png'
import springBoot from './../../../../assets/images/spring-boot-logo.png'

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
                style={{backgroundImage: `url(${jwt})`, backgroundSize: "40px"}}></div>
                <b className={styles.element} id={styles.djangoFramework}>Django</b>
                <div className={`${styles.element} ${styles.imgSkill}`} 
                style={{backgroundImage: `url(${springBoot})`, backgroundSize: "30px"}}></div>
                <b className={styles.element} id={styles.netFramework}>.NET</b>

            </div>
        </>
    );
};

export default CircleListView;