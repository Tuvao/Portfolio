import React from 'react';
import { useParams } from 'react-router';
import "../CSS/projects.css";
import { Panel2 } from '../Home/Panel2';
import { Project } from './Project';

export const ProjectMain = () => {
    let { name } = useParams();
    return (
        <div>
            {!name ?
                <div className="container">
                    <Panel2 />
                </div>
                :
                <Project />
            }
        </div>
    )
}