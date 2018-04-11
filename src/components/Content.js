import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import NewReview from './NewReview'
import Home from './Home.js';
import Area from './Area';
import Coronado from './areas/Coronado'
import EastVillage from './areas/EastVillage'
import Gaslamp from './areas/Gaslamp'
import LittleItaly from './areas/LittleItaly'
import LomaPortal from './areas/LomaPortal'
import NorthPark from './areas/NorthPark'
import OceanBeach from './areas/OceanBeach'
import ShelterIslandArea from './areas/ShelterIslandArea'
import Hillcrest from './areas/Hillcrest'
import Register from './Register'

const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
	  <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/newreview" component={NewReview} />
    <Route exact path="/area" component={Area} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/coronado" component={Coronado} />
    <Route exact path="/eastvillage" component={EastVillage} />
    <Route exact path="/gaslamp" component={Gaslamp} />
    <Route exact path="/littleitaly" component={LittleItaly} />
    <Route exact path="/lomaportal" component={LomaPortal} />
    <Route exact path="/northpark" component={NorthPark} />
    <Route exact path="/oceanbeach" component={OceanBeach} />
    <Route exact path="/shelterisland" component={ShelterIslandArea} />
    <Route exact path="/hillcrest" component={Hillcrest} />
  </Switch>
);

export default Content;
