import React from 'react';
import "../CSS/home.css";
import { cardData } from '../Data/data';
import { Card } from './Cards/Card';

export const Panel2 = () => {
    return (
        <div className="panel-2">
            <h2 className="section-heading">My Projects</h2>
            <p>These are examples of some work I have done, definitely a work in progress to display everything in a meaningful way!</p>
            <div className="card-view">
                {cardData.map(card => {
                    return (
                        <Card title={card.title} key={card.id} description={card.shortDescription} src={card.src} url={card.url} />
                    );
                })
                }
            </div>
        </div>);
}