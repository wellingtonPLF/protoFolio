import React, { useState, useRef, useEffect } from 'react';
import styles from './mainStyle.module.css'
import MenuComponent from "./../../components/_main/menuComponent/menuView";

const MainScreenView = (props) => {

    const ref = useRef()
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + letters + nums;
    const [columns, setColumns] = useState()
    const [context, setContext] = useState()
    const [loadedImages, setLoadedImages] = useState([]);
    const rainDrops = []
    const fontSize = 22;

    const [widthState, setWidthState] = useState(window.innerWidth);
    const [heightState, setHeightState] = useState(
        (window.innerWidth <= 800)? window.innerHeight * 0.38 : window.innerHeight * 0.49
    );

    const [intervalState, setIntervalState] = useState();

    const handleLoadImages = () => {
        setLoadedImages(prevState => [...prevState, true]);
    }

    const draw = (width, height) => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, width, height);
        context.fillStyle = '#008854';
        context.font = fontSize + 'px monospace';

        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if(rainDrops[i] * fontSize > height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (intervalState != undefined) {
                let height = 0;
                const width = window.innerWidth
                if (window.innerWidth <= 800) {
                    height = window.innerHeight * 0.38
                }
                else {
                    height = window.innerHeight * 0.49
                }                
                setWidthState(width)
                setHeightState(height)
                setColumns(width/fontSize)
                clearInterval(intervalState)
            }
        })
    }, [intervalState])

    useEffect(() => {
        setColumns(widthState/fontSize)
        setContext(ref.current.getContext('2d'))
    }, [ref])

    useEffect(() => {
        if (columns != undefined) {
            for( let x = 0; x < columns; x++ ) {
                rainDrops[x] = 1;
            }
            const interval = setInterval(() => draw(widthState, heightState), 70)
            setIntervalState(interval)
            return () => {
                clearInterval(interval);
            }
        }
    }, [columns])

    return (
        <div id={styles.mainPage}>
            <div id={styles.blocoUm}>
                <div className={styles.menu}>
                    <MenuComponent className={styles.menu} />
                </div>
                <div className={styles.imagem}>
                    <canvas width={widthState} height={heightState} ref={ref} id="matrix" className={styles.matrix}></canvas>
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
