
import image1 from './images.jpeg';
import image2 from './image1.jpeg';
import locationIcon from './location_icon.png'
import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";
import { Chart } from "react-google-charts";
class App extends Component {
  render () {
    return (
      <div className="container">
        <header className="header">
          Route to Rescue
        </header>
        <header className="header2">
          Providing Rescue and helping lawmakers catch preprators
        </header>
        <hr className="line"/>
        <div className="clearfix">
          <div className="box">
            <picture>
              <img src={image1} alt={"image loading"} />
            </picture>                      
          </div>
          <div className="box">
            <Chart
              //width={'600px'}
              height={'280px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Emotion', '%'],
                ['Happy', 10],
                ['Sad', 60],
                ['Fear', 89],
                ['Shock',75],
              ]}
              options={{
                // Material design options
                title: "Emotion Analysis",
                //backgroundColor:'#282c34'
              }}
              />
          </div>
          <div className="box">
            <ul className="a">
              <li>Probability: 90%</li>
              <li>Face Match from other Reportings: 8</li>
              <li>Last 5 Locations Reported:</li>
              <ul className="a">
                <li>Nairobi, Kenya</li>
                <li>Mombasa, Kenya</li>
                <li>Miami, USA</li>
                <li>Vegas, USA</li>
              </ul>  
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: Mar 28, 2020</li>
            </ul>  
          </div>         
        </div>
        <hr className="line"/>
        <div className="clearfix">
          <div className="box">
            <picture>
              <img src={image2} alt={"image loading"} />
            </picture>
          </div>
          <div className="box">
            <Chart
              //width={'600px'}
              height={'280px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Emotion', '%'],
                ['Happy', 7],
                ['Sad', 90],
                ['Fear', 40],
                ['Shock',36],
              ]}
              options={{
                // Material design options
                title: "Emotion Analysis",
                //backgroundColor:'#282c34'
              }}
              />
          </div>
          <div className="box">
            <ul className="a">
              <li>Probability: 79%</li>
              <li>Face Match from other Reportings: 3</li>
              <li>Last 5 Locations Reported:</li>
              <ul className="a">
                <li>Kolkata, India</li>
                <li>San diego, USA</li>
              </ul>  
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: Feb 10, 2020</li>
            </ul>  
          </div>         
        </div>
        
        
      </div>
    );
  }
}; 
export default App;