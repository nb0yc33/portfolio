import React, { Component } from 'react';
import profileimage from '../images/profile.jpg';
import './profile.scss';

class Profile extends Component {
    state = {  }
    render() { 
        return (
            <div className="profile">
                <img src={profileimage} className="profile-image" alt="Nicholas Boyce" />
                <div className="description">
                    <p className="desc-heading"> Hi, my name's Nick and I'm a final year undergraduate IT student with a keen interest in full-stack web development.</p>
                    <p>
                        I'm on a mission to create powerful web applications that can be used to make peoples' lives easier. I'm particularly interested in delving deeper
                        into both back-end and front-end work because I thrive when I give myself challenges and new learning goals.
                    </p>
                    <p>
                        Beyond web development, I also really enjoy database management work and I am always open to new challenges in this area. I find the
                        data management challenges that businesses face fascinating, and this sort of problem solving really appeals to me too.
                    </p>
                    <p className="hobbies">What are some other things that I like?</p>
                    <p className="hobby-item">Tennis, gaming, comedies, action movies, going for drinks and large servings of chicken wings.</p>
                </div>
            </div>
          );
    }
}
 
export default Profile;