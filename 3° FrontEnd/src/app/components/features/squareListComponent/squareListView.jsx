import React from 'react';
import "./squareListStyle.css"

const SquareListView = (props) => {
    return (
        <div id="squareList">
            {
                props.projects.map((element) => (
                    <a target='_blank' href={element.html_url} className="project" key={element.id}>
                        <div>{element.language}</div>
                        <div>{element.name}</div>
                    </a>
                ))
            }
        </div>
    );
};

export default SquareListView;
