
import image1 from './images.jpeg';
import image2 from './image1.jpeg';
import locationIcon from './location_icon.png'
import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";
import { Chart } from "react-google-charts";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainPage : true,
      isHeatMap: false
    };

    this.showHeatMap  = this.showHeatMap.bind(this);
    this.showMainComp = this.showMainComp.bind(this);
  }
  showHeatMap() {
    this.setState({isHeatMap: true, isMainPage: false });
  }

  showMainComp() {
    this.setState({isHeatMap: false, isMainPage: true });
  }

  heatMap(){
    return(
      <form>
        <div className="container">
          <header className="header">
            Route to Rescue
          </header>
          <header className="header2">
            Empowering Community to Catch Criminals 
          </header>
            <hr className="line"/>
          <div>
              <button onClick={this.showMainComp} className="return-button">Return To Missing Page</button>
            </div>
        </div>
      </form>
    );
  };

  render () {
        const mainForm = (<form>
        <div className="container">
        <header className="header">
          Route to Rescue
        </header>
        <header className="header2">
          Empowering Community to Catch Criminals 
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
              <button onClick={this.showHeatMap} className="button">View Heat Map</button>  
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
              <button onClick={this.showMainComp} className="button">View Heat Map</button>
            </div>         
          </div>
        </div>
        </form>);
    return (
      <div>
        { this.state.isMainPage ? mainForm : null }
        { this.state.isHeatMap ? this.heatMap() : null }
      </div>
    );
  }
}; 
export default App;