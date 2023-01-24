import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/hero-img1.png";
import "./styles.scss";

export default function HeroImg1() {
    return (
        <>
            <div className="hero__bg">
                <img className="img" src={Img} alt="programming" />
            </div>

            <div className="hero__content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer.</h1>

                <Link className="btn" to="/projects">Projects</Link>
                <Link className="btn" to="/contact">Contact</Link>
            </div>
        </>
    );
};