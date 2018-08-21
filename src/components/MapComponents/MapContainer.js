import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Navigation from '../../components/Navigation';
import '../../css/Navigation.css';
import '../../css/MapContainer.css';
import { Carousel, Jumbotron } from 'react-bootstrap';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const styles = {
  map: {
    maxWidth: '1100px',
    margin: '5% auto 0'
  },
  container: {
    minHeight: '750px',
    maxHeight: '800px',
    height: '75%'
  },
  infoStyle: {
    fontSize: '28px',
    color: '#a3c1ad'
  }
};

export class MapContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            url: env.REACT_APP_API_URL,
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

    onMapClicked(props) {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    }


    render() {
        return (
        <div>
          <Navigation />
            <Jumbotron>
              <h1 className = "jumbo">Welcome to HotSpotz!</h1>
              <p className = "jumbo">
                Find, Review, and Discover the best places to visit in San Diego!
              </p>

            </Jumbotron>
              <Carousel>
                <Carousel.Item>
                  <img className = "carousel" alt="Gaslamp" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/253/2017/05/18123334/ct-trav-0322-food-gaslamp-san-diego-20150313.jpg" />
                  <Carousel.Caption>
                    <h3>1. Gaslamp</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="East Village" src="https://www.udr.com/uploadedImages/UDR3/Communities/13th_+_Market/images/HR_MainHeader_Overview_1900x874_13thAndMarket_2013_BDG4_EL.jpg?n=70" />
                  <Carousel.Caption>
                    <h3>2. East Village</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Little Italy"
                  src="https://pre00.deviantart.net/e956/th/pre/i/2013/079/8/a/little_italy___san_diego_by_timothylgreen-d5yp4kt.jpg" />
                  <Carousel.Caption>
                    <h3>3. Little Italy</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="North Park" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/253/2017/05/18123334/ct-trav-0322-food-gaslamp-san-diego-20150313.jpg" />
                  <Carousel.Caption>
                    <h3>4. North Park</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Hillcrest" src="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/2286/files/2017/11/1.jpg" />
                  <Carousel.Caption>
                    <h3>5. Hillcrest</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Coronado" src="http://coronadovisitorcenter.com/static/media/uploads/del_holiday.jpg" />
                  <Carousel.Caption>
                    <h3>6. Coronado</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Shelter Island Area" src=http:"http://www.islandpalms.com/resourcefiles/mainimages/island-marina_1.jpg" />
                  <Carousel.Caption>
                    <h3>7. Shelter Island Area</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Ocean Beach" src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-3651097797_2161724fc9_b-1024x683.jpg" />
                  <Carousel.Caption>
                    <h3>8. Ocean Beach</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className = "carousel" alt="Loma Portal" src="https://marclyman.com/wp-content/uploads/2014/11/point-loma-san-diego-bay-skyline.jpg" />
                  <Carousel.Caption>
                    <h3>9. Loma Portal</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

          <div className = "destination">
            Pick Your Destination Point
          </div>
          <div className = "border">
          <Map className = "mapborder"
            google={this.props.google}
            onClick={this.onMapClicked} alt="North Park"
            style={styles.map}

            containerStyle={styles.container}
            initialCenter={{
                lat: 32.7301,
                lng:-117.1997
            }}
            zoom={13}
            draggable={false}
            maxZoom={13}
            minZoom={13}
            zoomControl={false}
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
            >
            <Marker
                name={'Gaslamp District'}
                onClick={this.onMarkerClick}
                url={'https://hotspotzapp.herokuapp.com/gaslamp'}
                position={{lat: 32.709960, lng: -117.160484}}
                icon={"https://png.icons8.com/ios/50/1abc9c/1-circle-filled.png"}
                title={'Gaslamp District'}
             />
              <Marker
                  name={'East Village'}
                  onClick={this.onMarkerClick}
                  url={'https://hotspotzapp.herokuapp.com/eastvillage'}
                  position={{lat: 32.712125, lng: -117.151177}}
                  icon={"https://png.icons8.com/ios/50/1abc9c/2-circle-filled.png"}
                  title={'East Village'}
               />
                <Marker
                   name={'Little Italy'}
                   onClick={this.onMarkerClick}
                   url={'https://hotspotzapp.herokuapp.com/littleitaly'}
                   position={{lat: 32.723399, lng: -117.168674}}
                   icon={"https://png.icons8.com/ios/50/1abc9c/3-circle-filled.png"}
                   title={'Little Italy'}
                />
                <Marker
                    name={'North Park'}
                    onClick={this.onMarkerClick}
                    url={'https://hotspotzapp.herokuapp.com/northpark'}
                    position={{lat: 32.744298, lng: -117.129502}}
                    icon={"https://png.icons8.com/ios/50/1abc9c/4-circle-filled.png"}
                    title={'North Park'}
                 />
                 <Marker
                     name={'Hillcrest'}
                     onClick={this.onMarkerClick}
                     url={'https://hotspotzapp.herokuapp.com/hillcrest'}
                     position={{lat: 32.746665, lng: -117.163903}}
                     icon={"https://png.icons8.com/ios/50/1abc9c/5-circle-filled.png"}
                     title={'Hillcrest'}
                  />
                  <Marker
                      name={'Coronado'}
                      url={'https://hotspotzapp.herokuapp.com/coronado'}
                      onClick={this.onMarkerClick}
                      position={{lat: 32.691691, lng: -117.179235}}
                      icon={"https://png.icons8.com/ios/50/1abc9c/6-circle-filled.png"}
                      title={'Coronado'}
                   />
                   <Marker
                       name={'Shelter Island Area'}
                       url={'https://hotspotzapp.herokuapp.com/shelterisland'}
                       onClick={this.onMarkerClick}
                       position={{lat: 32.724563, lng: -117.228456}}
                       icon={"https://png.icons8.com/ios/50/1abc9c/7-circle-filled.png"}
                       title={'Shelter Island Area'}
                    />
                    <Marker
                        name={'Ocean Beach'}
                        url={'https://hotspotzapp.herokuapp.com/oceanbeach'}
                        onClick={this.onMarkerClick}
                        position={{lat: 32.749101, lng: -117.247127}}
                        icon={"https://png.icons8.com/ios/50/1abc9c/8-circle-filled.png"}
                        title={'Ocean Beach'}
                     />
                     <Marker
                         name={'Loma Portal'}
                         url={'https://hotspotzapp.herokuapp.com/lomaportal'}
                         onClick={this.onMarkerClick}
                         position={{lat: 32.740971, lng: -117.219255}}
                         icon={"https://png.icons8.com/ios/50/1abc9c/9-circle-filled.png"}
                         title={'Loma Portal'}
                      />

               <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <a style={styles.infoStyle} href={this.state.selectedPlace.url}>{this.state.selectedPlace.name}</a>
                  </div>
              </InfoWindow>
          </Map>
          </div>
          </div>

    );
  }
}

export default GoogleApiWrapper({
    apiKey: (env.REACT_APP_API_KEY)
})(MapContainer)
