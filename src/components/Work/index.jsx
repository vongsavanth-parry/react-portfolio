import React from "react";
import WorkCard from "../WorkCard";
import { WorkCardData } from "../WorkCardData";

export default function Work() {
    return (
        <div className="project">
            <h1 className="project__heading">Projects</h1>
            <div className="project__container">
                {WorkCardData.map((item, index) => {
                    return (
                        <WorkCard
                            key={index}
                            title={item.title}
                            text={item.text}
                            view={item.view}
                            source={item.source}
                            img={item.img}
                        />
                    )
                })}
            </div>
        </div>
    );
};