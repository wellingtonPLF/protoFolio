import React, { useEffect } from 'react';
import styles from './mainStyle.module.css'
import MenuComponent from "./../../components/_main/menuComponent/menuView";

const MainScreenView = (props) => {

    return (
        <div id={styles.mainPage}>
            <div id={styles.blocoUm}>
                <div className={styles.menu}>
                    <MenuComponent className={styles.menu} />
                </div>
                <div className={styles.imagem}>
                    <div className={styles.face}></div>
                </div>
                <div className={styles.subject}>
                    <div></div>
                    <div>SOME OF MY LASTEST WORK</div>
                </div>
            </div>
            <div id={styles.blocoDois}>
                <div className={styles.projects}>
                    <div className={styles.grayLayer}></div>
                    <div className={styles.mainLayer}>
                        {
                            props.projects && (
                                <div className={styles.mainProjects}>
                                    {
                                        props.projects.map( e => (
                                            <a target="_blank" href={e.html_url} key={e.id}>
                                                <div className={styles.project}>
                                                    <div>{e.language}</div>
                                                </div>
                                                <div style={{color: "black", marginLeft: "5px"}}>{e.name}</div>
                                            </a>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreenView;
