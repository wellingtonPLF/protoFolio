import React, { useEffect, useState } from 'react';
import styles from './mainStyle.module.css'
import MenuComponent from "./../../components/_main/menuComponent/menuView";

const MainScreenView = (props) => {

    const [loadedImages, setLoadedImages] = useState([]);

    const handleLoadImages = () => {
        setLoadedImages(prevState => [...prevState, true]);
    }

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
                    <div className={styles.mainLayer}>
                        {
                            props.projects && (
                                <div className={styles.mainProjects}>
                                    {
                                        props.projects.map( (e, index) => (
                                            <a target="_blank" href={e.html_url} key={e.id}>
                                                <div>
                                                    <div className={styles.project}>
                                                        <img src={e.img} onLoad={handleLoadImages} className={(loadedImages[index])? styles.fade_in_out : undefined} alt='None' />
                                                        <div>{e.language}</div>
                                                    </div>
                                                </div>
                                                <div className={styles.projectName}>{e.name}</div>
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
