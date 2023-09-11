import React from 'react';
import me from "../img/tuva_happy_2.jpeg";
import "../CSS/home.css";


export const Panel1 = () => {
    return (
        <div className="panel-1">
            <div className="text-container">
                <h1>Hi, I'm Tuva</h1>
                <p className="intro-paragraph">I design and program pleasant experiences for users, applying <span className="highlight">knowledge</span>, <span className="highlight">empathy</span> and <span className="highlight">curiosity</span>. I easily adapt to any situation and environment, and will never turn down the opportunity to learn. 
                </p>
            </div>
            <div className="illustration-panel">
                <div className="image-container">
                    <img src={me} alt="SVG of me typing on computer" />
                </div>
            </div>
        </div>
    );
}