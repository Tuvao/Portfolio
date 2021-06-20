import Button from 'react-bootstrap/Button'
import React from 'react';
import "../../../CSS/cards.css";

export const Card = ({title, description, src, url}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="image-container-card">
                <img src={src} alt={title}/>
            </div>
            <Button variant="primary" href={`/projects/${url}`}>Read more</Button>
        </div>
    )
}