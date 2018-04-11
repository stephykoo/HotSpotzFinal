import React, { Component } from 'react';
import MapContainer from './MapComponents/MapContainer.js'
import '../css/App.css';


class Home extends Component {
    render() {
      return (
        <div id='map'>
            <MapContainer />
        </div>
      );
    }
}

export default Home
