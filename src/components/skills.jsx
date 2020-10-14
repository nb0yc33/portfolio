import React, { Component } from 'react';
import './skills.scss';
import dev from '../images/dev.svg';
import deadline from '../images/deadline.svg';
import documentation from '../images/documentation.svg';
import coffee from '../images/coffee.svg';

class Skills extends Component {
    state = { 
     }
    render() { 
        return (
            <div className="skills">
                <div className="skill"> 
                    <p className="pro">Front-End & Back-End Web Development (PHP, ReactJS, JavaScript, Python)</p>
                    <img src={dev} className="skill-graphic" alt="Development Graphic"></img>
                </div>
                <div className="skill">
                    <p className="pro">Meeting deadlines</p>
                    <img src={deadline} className="skill-graphic" alt="Deadline Graphic"></img>
                </div>
                <div className="skill">
                    <p className="pro">Writing clear & comprehensive documentation</p>
                    <img src={documentation} className="skill-graphic" alt="Documentation Graphic"></img>
                </div>
                <div className="skill">
                    <p className="pro">Drinking a lot of coffee</p>
                    <img src={coffee} className="skill-graphic" alt="Coffee Graphic"></img>
                </div>
            </div>
          );
    }
}
 
export default Skills;