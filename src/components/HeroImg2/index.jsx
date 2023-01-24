import React from "react";
import "./styles.scss";

export default function HeroImg2(props) {
    return (
        <div className="hero">
            <div className="hero__heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};