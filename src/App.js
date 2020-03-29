
import image1 from './images.jpeg';
import image2 from './image1.jpeg';
import kidnaping from './kidnaping.jpg';
import React, { Component } from 'react';
import './App.css';
import { Chart } from "react-google-charts";
import HeatMap from "./HeatMap.js"; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <Router> 
      <div className="container">    
        <div className="goRight">
          <a href="https://www.fbi.gov/wanted/kidnap" target="_blank">FBI Report Missing Persons</a>
        </div>
        <br/>
        <div className="goRight">
          <a href="https://www.interpol.int/en/How-we-work/Notices/View-Yellow-Notices" target="_blank">Interpol Report Missing Persons</a>
        </div>
        <br/>  
        <div>
            <Link to="./HeatMap.js" className="btn btn-primary">HeatMap</Link>
            <Route exact path="/HeatMap.js" component={HeatMap} />
         </div>
        <header className="header">
          Route to Rescue
        </header>        
        <header className="header2">
          Empowering Community to Prevent Human Trafficking          
        </header>       
        <hr className="line"/>
        <button onClick={this.toggleHidden.bind(this)} >
          Refresh Tweets
        </button>
        {!this.state.isHidden && <Child />}
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
                title: "Emotion Analysis",
                titleTextStyle: {
                  fontSize: 20, // 12, 18 whatever you want (don't specify px)
                  bold: true,   
                },
                vAxis : { 
                  textStyle : {
                      fontSize: 20 // or the number you want
                  }          
                }
              }}
              />
          </div>
          <div className="box">
            <ul className="a">
              <li>Case: 110</li>
              <li>Probability of Trafficking: 90%</li>
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
                ['Fear', 20],
                ['Shock',26],
              ]}
              options={{
                title: "Emotion Analysis",
                titleTextStyle: {
                  fontSize: 20, // 12, 18 whatever you want (don't specify px)
                  bold: true,   
                },
                vAxis : { 
                  textStyle : {
                      fontSize: 20 // or the number you want
                  }          
                }
              }}
              />
          </div>
          <div className="box">
            <ul className="a">
              <li>Case: 100</li>
              <li>Probability of Trafficking: 49%</li>
              <li>Face Match from other Reportings: 3</li>
              <li>Last 5 Locations Reported:</li>
              <ul className="a">
                <li>Kolkata, India</li>
                <li>San Diego, USA</li>
              </ul>  
              <li>Match in Missing Person Report: Yes</li>
              <li>Date Reported Missing: Feb 10, 2020</li>
            </ul>  
          </div>         
        </div>    
        
      </div>
      </Router> 
    );
  }
}; 

const Child = () => (
  <div>
  <div className="clearfix">
    <div className="box">
      <picture>
        <img src={kidnaping} alt={"image loading"} />
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
          ['Happy', 5],
          ['Sad', 30],
          ['Fear', 92],
          ['Shock',81],
        ]}
        options={{
          title: "Emotion Analysis",
          titleTextStyle: {
            fontSize: 20, // 12, 18 whatever you want (don't specify px)
            bold: true,   
          },
          vAxis : { 
            textStyle : {
                fontSize: 20 // or the number you want
            }          
          } 
        }}
        />
    </div>
    <div className="box">
      <ul className="a">
        <li>Case: 120</li>
        <li>Probability of Trafficking: 92%</li>
        <li>Face Match from other Reportings: 1</li>
        <li>Last 5 Locations Reported:</li>
        <ul className="a">
          <li>London, UK</li>
        </ul>  
        <li>Match in Missing Person Report: Yes</li>
        <li>Date Reported Missing: Mar 29, 2020</li>
      </ul>  
      </div>         
    </div>
  <hr className="line"/>
  </div>
  )

export default App;
