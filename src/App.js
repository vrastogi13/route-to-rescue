import React from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from './images.jpeg';

function App() {
  return (    
    <div class="container">
      <header class="header">
        Route to Rescue
      </header>
      <div class="clearfix">
        <div class="box" >
        <img src={image1}/>
        </div>
        <div class="box" >
        <ul class="a">
              <li>Probability: 90%</li>
              <li>Number of Reportings: 5</li>
              <li>Emotion: FEAR 70%, SAD 83%</li>
              <li>Location: Kenya, Africa -->DC, USA -->Atlanta, USA</li>
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: March 28, 2020</li>
            </ul>     
        </div>
      </div>
      <div class="clearfix">
        <div class="box" >
        <img src={image1}/>
        </div>
        <div class="box" >
        <ul class="a">
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

export default App;
