import React, { useEffect, useState } from 'react';
import styles from './aboutSplideStyle.module.css';
import FavoriteListComponent from '../../features/favoriteListComponent/favoriteListScript';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

const AboutSplideComponent = () => {

    const [splide, setSplide] = useState();

    useEffect(() => {
        if (splide == undefined) {
            setSplide(
                new Splide('.splide', {
                    type: 'fade',
                    perPage: 1,
                    perMove: 1
                  }).mount()
            )
        }
    }, [])

    return (
        <div id={styles.aboutPage}>
            <div className="splide" role="group" aria-label="Splide Basic HTML Example">
                <div className='splide__track'>
                    <ul className="splide__list" id={styles.containerUl}>
                            <li className="splide__slide">
                                <div id={styles.rightContainer}>
                                    <div id={styles.video}>
                                        <iframe src="https://www.youtube.com/embed/0lbzmZeS-BY" controls></iframe>
                                    </div>
                                    <div>
                                        <div>
                                            <h4>Fatos Aleatórios</h4>
                                            <div>
                                            In addition to being a programmer, 
                                            I also have a great passion for drawing, music, and theater. 
                                            One of my hobbies is exercising every early morning, 
                                            while I use the evenings to study new languages in which I am interested.
                                            </div>
                                        </div>
                                        <div id={styles.desktop}></div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div id={styles.leftContainer}>
                                    <div>
                                        <h3>Wellington Pessoa de Lima Filho</h3>
                                        <div>
                                        I am currently a graduate from the Federal Institute of Paraíba (IFPB). 
                                        I still have much to learn, but I know I am on the right path. 
                                        I am confident that I will meet amazing people and learn a great deal from them, 
                                        just as they will from me. My field involves software development, 
                                        and even though I may not have extensive experience, 
                                        I believe I am capable of pursuing what is relevant and fascinating to me.
                                        </div>
                                        <a href='https://drive.google.com/file/d/1nyRhUYTHKsw6IyxWUqKotTsbomLNaPPj/view?usp=drive_link' target='_blank'>resume</a>
                                    </div>
                                    <FavoriteListComponent />
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSplideComponent;
