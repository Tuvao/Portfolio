import React from 'react';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router';
import { cardData } from '../Data/data';
import "../../CSS/projects.css";
import { Project } from './Project';

export const ProjectMain = () => {
    let { name } = useParams();
    return (
        <div>
            {!name ?
                <div className="container">
                    <h1 className="section-heading">My projects</h1>
                </div>
                :
                <Project />
            }
        </div>
    )
}