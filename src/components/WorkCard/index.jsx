import React from "react";
import "./styles.scss";

export default function WorkCard(props) {
    return (
        <div className="project__card">
            <img src={props.img} alt="project img" />
            <h2 className="project__title">
                {props.title}
            </h2>
            <div className="project__content">
                <p>
                    {props.text}
                </p>
            </div>
            <div className="project__btns">
                <a href={props.view} className="btn">View</a>
                <a href={props.source} className="btn">Source</a>
            </div>
        </div>
    );
};