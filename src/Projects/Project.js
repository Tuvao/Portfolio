import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import "../../CSS/projects.css";
import { cardData } from '../Data/data';

export const Project = () => {
    let { name } = useParams();
    let project = cardData.find(card => card.url === name);
    let { title, description, role, tags, phases, quote, autor, period } = project;
    return (
        <div className="container">
            {!project ?
                <div className="error-not-found">
                    Sorry, I could not find this project!
                    <Button variant="link" href="/">Go back to home</Button>
                </div>
                :
                project.url === "dev/music-project" ?
                "Music Project"
                :
                <div>
                    <div className="project-intro">
                        <div className="project-intro-basic">
                            <h1 className="project-heading">{title}</h1>
                            <p><strong>Keywords: </strong>
                                {tags.map((tag, i) => {
                                    return (
                                        <Badge pill className="tags" variant="info" key={i}>
                                            {tag}
                                        </Badge>
                                    )
                                }
                                )}
                            </p>
                            <p><strong>Role: </strong>{role}</p>
                            <p><strong>Period: </strong>{period}</p>
                            <p>{description}</p>
                        </div>
                        {quote ? <div className="project-intro-quote">
                            <blockquote cite="https://www.linkedin.com/in/tuva-oedegaard/">"{quote}" - {autor} </blockquote>
                            <small>See full quote on my <a href="https://www.linkedin.com/in/tuva-oedegaard/" target="_blank">LinkedIn profile</a></small>
                        </div> : ""}
                    </div>

                    {phases.map(({ id, name, description, images, descriptionP2, imagesP2 }) => {
                        return (
                            <div key={id} className="phases">
                                <h2>{name}</h2>
                                <p>{description}</p>
                                {images.length === 0 ?
                                    <p>Images coming soon!</p>
                                    :
                                    images.map((img, i) => {
                                        return (
                                            <img className={`images-${id} ${img.class}`} alt={img.alt} src={img.src} key={i} />
                                        )
                                    })}
                                {descriptionP2 ? <p className="description-2">{descriptionP2}</p> : ''}
                                {imagesP2 ?
                                    imagesP2.map((img, i) => {
                                        return (
                                            <img className={`images-${id}`} alt={img.alt} src={img.src} key={i} />
                                        )
                                    })
                                    : ''
                                }
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    )
}