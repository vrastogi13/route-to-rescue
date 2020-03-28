
import image1 from './images.jpeg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="container">
        <header className="header">
          Route to Rescue
        </header>
        <div className="clearfix">
          <div className="box">
          <picture>
            <img src={image1} alt={"image loading"} />
          </picture>
          </div>
          <div className="box">
            <ul className="a">
              <li>Probability: 90%</li>
              <li>Number of Reportings: 5</li>
              <li>Emotion: FEAR 70%, SAD 83%</li>
              <li>Location: Kenya, Africa --&gt;DC, USA --&gt;Atlanta, USA</li>
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: March 28, 2020</li>
            </ul>     
          </div>
        </div>
        <div className="clearfix">
          <div className="box">
            <picture>
              <img src={image1} alt={"image loading"} />
            </picture>
          </div>
          <div className="box">
            <ul className="a">
              <li>Probability: 90%</li>
              <li>Emotion: FEAR 70%, DISGUSTED 43%</li>
              <li>Location: Atlanta, USA</li>
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: March 28, 2020</li>
            </ul>     
          </div>
        </div>
      </div>
    );
  }
}; 
export default App;