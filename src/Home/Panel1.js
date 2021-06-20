import React from 'react';
import me from "../../images/tuva_happy.jpeg";
import "../../CSS/home.css";


export const Panel1 = () => {
    return (
        <div className="panel-1">
            <div className="text-container">
                <h1>Hi, I'm Tuva</h1>
                <p>I am a curios, engaged and driven User Experience Designer and Front End Developer, always looking for new ways to learn. </p>
            </div>
            <div className="illustration-panel">
                <div className="image-container">
                    <img src={me} alt="SVG of me typing on computer" />
                </div>
            </div>
        </div>
    );
}