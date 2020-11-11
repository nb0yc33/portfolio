import React, { Component } from 'react';
import homegraphic from '../images/webdesign.jpg';
import './homegraphic.scss';

class HomeGraphic extends Component {
    state = {  }
    render() { 
        return (
            <div className="homegraphic">
                <img src={homegraphic} className="home-graphic" alt="Devices Graphic" />
            </div>
          );
    }
}
 
export default HomeGraphic;