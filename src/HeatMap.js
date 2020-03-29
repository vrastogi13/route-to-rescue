import React from 'react';
import location_icon from './location_icon.webp';
import './App.css';
import ReactMapGl , { Layer, Marker} from "react-map-gl";
const mapboxaccessToken = 'pk.eyJ1Ijoic3NzZGV2ZWxvcGVyIiwiYSI6ImNrOGQ2OW82eTBvOTkzZnFlNzVrbzhkaTIifQ.rM0AkAjkaSiHJABk2cpVoQ';

class HeatMap extends React.Component {
  state = {
      viewport: {
          width:"80vw",
          height:"80vw",
          latitude:40.7250863,
          longitude:-73.9773608,
          zoom:1,
      }
  }  

  render() {
    return (
      <div>
          <ReactMapGl
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={mapboxaccessToken}
            >            
            <Marker
                latitude={51.509865}
                longitude={-0.118092}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 120, Mar 29, 2020</span>
            </Marker>
            <Marker
                latitude={25.761681}
                longitude={-80.191788}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 110, Mar 28, 2020</span>
            </Marker>
            <Marker
                latitude={36.114647}
                longitude={-115.172813}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 100, Feb 18, 2020</span>
            </Marker>
            <Marker
                latitude={32.715736}
                longitude={-117.161087}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 100, Feb 14, 2020</span>
            </Marker>
            <Marker
                latitude={22.572645}
                longitude={88.363892}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 100, Feb 10, 2020</span>
            </Marker>
            <Marker
                latitude={-4.036878}
                longitude={39.669571}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 110, Mar 18, 2020</span>
            </Marker>
            <Marker
                latitude={-1.286389}
                longitude={36.817223}
                offsetLeft={-20} 
                offsetTop={-10}>
                    <img className="icon" src={location_icon} />
                    <span className="smallText">Case: 110, Mar 14, 2020</span>
            </Marker>
          </ReactMapGl>
        
          
      </div>
      
    )
  }
}

export  default HeatMap;