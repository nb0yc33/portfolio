import React from 'react';
import './App.scss';
import './thumbnail.scss';
import github from './images/github.svg';
import link from './images/link.svg';

 
function Thumbnail(props) {
  return (
      <div className="project">
          <div className="project-image">
            <img src={props.image} className="project-showcase" alt="Project"/>
            <div className="overlay">
              <div className="overlay-text">{props.description}</div>
              <div className="links">
                <a href={props.github}><img src={github} className="github" alt="GitHub Link"></img></a>
                <a href={props.link}><img src={link} className="link" alt="Web Link"></img></a>
              </div>
            </div>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
      </div>

  );
}
 
export default Thumbnail;