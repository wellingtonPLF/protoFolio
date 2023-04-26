import React from 'react';
import styles from "./squareListStyle.module.css"

const SquareListView = (props) => {
    return (
        <div id={styles.squareList}>
            {
                props.projects.map((element) => (
                    <a target='_blank' href={element.html_url} className={styles.project} key={element.id}>
                        <div>{element.language}</div>
                        <div>{element.name}</div>
                    </a>
                ))
            }
        </div>
    );
};

export default SquareListView;
