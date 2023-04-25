import React from 'react';
import styles from './mainStyle.module.css'
import MenuComponent from "./../../components/_main/menuComponent/menuView";

const MainScreenView = (props) => {

    return (
        <div>
            <div className={styles.imagem}>
                <div className={styles.threeJS}>
                    <div></div>
                </div>
                <div className={styles.menu}>
                    <MenuComponent />
                </div>
            </div>
            <div className={styles.subjectProjects}>SOME OF MY LASTEST WORK</div>
            <div className={styles.projects}>
                <div className={styles.grayLayer}></div>
                <div className={styles.mainLayer}>
                    {
                        props.projects && (
                            <div className={styles.mainProjects}>
                                {
                                    props.projects.map( e => (
                                        <span key={e.id}>
                                            <div className={styles.project}>
                                                <div>{e.name}</div>
                                            </div>
                                            <div style={{color: "black", marginLeft: "5px"}}>{e.description}</div>
                                        </span>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainScreenView;
