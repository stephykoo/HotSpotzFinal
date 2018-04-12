import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader,
  Well
} from 'react-bootstrap';
import '../../css/Gaslamp.css'
import NavigationPages from '../../components/NavigationPages'
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const apiUrl = env.REACT_APP_API_URL

export default class Gaslamp extends Component {
  constructor() {
    super();
    this.state = {
      averages: [],
      reviews: [],
      areas: [
        'East Village',
        'Little Italy',
        'North Park',
        'Hillcrest',
        'Gaslamp',
        'Coronado',
        'Shelter Island',
        'Ocean Beach',
        'Loma Portal'
      ]
    };
  }

  componentWillMount(){
    fetch(`${apiUrl}/avg_review_area/5`).then((rawResponse)=>{
      // rawResponse.json() returns a promise that we pass along
      return rawResponse.json()
    }).then((parsedResponse) => {
      // when this promise resolves, we can work with our data
      let reviewData = parsedResponse
        this.setState({averages: parsedResponse})
    })
  }

  componentDidMount(){
    fetch(`${apiUrl}/reviews_by_area_id/5`).then((rawResponse)=>{
      // rawResponse.json() returns a promise that we pass along
      return rawResponse.json()
    }).then((parsedResponse) => {
      // when this promise resolves, we can work with our data
      let reviewData = parsedResponse
        this.setState({reviews: parsedResponse})
    })
  }

  render() {
    return (
      <div>
      <NavigationPages />
      <div className="center_gaslamp">
      <Well className = "opa" id="area-name">
      {this.state.areas[4]}
      </Well>
      <br />
        <div className="card">
        <Grid>
          <Row id="overall-score">
            Overall: {this.state.averages.rating}
          </Row>
          <Row id="parking-score">
            Parking: {this.state.averages.parking}
          </Row>
          <Row id="cleanliness-score">
            Cleanliness: {this.state.averages.cleanliness}
          </Row>
          <Row id="safety-score">
            Safety: {this.state.averages.safety}
          </Row>
          <Row id="affordability-score">
            Affordability: {this.state.averages.price}
          </Row>
        </Grid>
        <Col>
        <Row><h2 className = "comments">Comments</h2></Row>
          {this.state.reviews.map((reviews, index) =>{
              return(
                <p className = "nobreak">
                  <Col>
                    <div>{reviews.review_text}</div>
                  </Col>
                </p>
              )
              }
              )}
        </Col>
      </div>
      </div>
      </div>
    )
  }
}
