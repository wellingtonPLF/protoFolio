import React from 'react';
import styles from "./SquareListStyle.module.css"

const SquareListView = (props) => {
    return (
        <div id={styles.squareList}>
            {
                props.projects.map((element) => (
                    <a href='' className={styles.project} key={element.id}>
                        <div>{element.img}</div>
                        <div>{element.title}</div>
                    </a>
                ))
            }
        </div>
    );
};

export default SquareListView;
