import React from 'react';
import { Link } from 'react-router-dom';
import "../../../CSS/cards.css";

export const Card = ({title, description, src, url}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="image-container-card">
                <img src={src} alt={title}/>
            </div>
            <Link to={url.includes("dev")? `/${url}` : `/projects/${url}`}>Read more</Link>
        </div>
    )
}