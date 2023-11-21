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
                                                Além de programador, tenho grande paixão por desenho, música e teatro. 
                                                Um dos meus passatempos é me exercitar todas as manhãs bem cedo, enquanto 
                                                aproveito as noites para estudar novas línguas no qual tenho
                                                interesse.
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
                                            Atualmente sou graduado pelo Instituo Federal da Paraíba (IFPB), 
                                            ainda tenho muito o que aprender, mas sei que estou no caminho certo, 
                                            tenho certeza de que irei conhecer pessoas incríveis e que aprenderei 
                                            muito com elas e elas comigo. A minha área envolve desenvolvimento de 
                                            software e mesmo não possuindo tanta experiência sei que sou capaz de
                                            ir atrás daquilo que é relevante e que me fascina.
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
