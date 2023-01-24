import React from "react";
import "./styles.scss";

import { BiRightArrow } from "react-icons/bi"

export default function AboutContent() {
    return (
        <div className="about">
            <div className="about__center">
                <h1>Who I am ?</h1>
                <p>Hello ! My name is Vongsavanth, I live in France and I enjoy creating things that live on the internet.</p>
                <p> Here are a few technologies I've been working with recently :</p>

                <ul>
                    <li><BiRightArrow size={15} className="icons" /> Javascript (ES6+)</li>
                    <li><BiRightArrow size={15} className="icons" /> ReactJS</li>
                    <li><BiRightArrow size={15} className="icons" /> React Native</li>
                    <li><BiRightArrow size={15} className="icons" /> NodeJS</li>
                    <li><BiRightArrow size={15} className="icons" /> Firebase</li>
                    <li><BiRightArrow size={15} className="icons" /> WordPress</li>
                </ul>
            </div>
        </div>
    );
};