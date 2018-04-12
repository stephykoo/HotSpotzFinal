import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader,
  Well
} from 'react-bootstrap';
import '../../css/Coronado.css'
import NavigationPages from '../../components/NavigationPages'
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const apiUrl = env.REACT_APP_API_URL

export default class Coronado extends Component {
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
    fetch(`${apiUrl}/avg_review_area/6`).then((rawResponse)=>{
      // rawResponse.json() returns a promise that we pass along
      return rawResponse.json()
    }).then((parsedResponse) => {
      // when this promise resolves, we can work with our data
      let reviewData = parsedResponse
        this.setState({averages: parsedResponse})
    })
  }

  componentDidMount(){
    fetch(`${apiUrl}/reviews_by_area_id/6`).then((rawResponse)=>{
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
      <div className="center_coronado">
      <Well className = "opa" id="area-name">
      {this.state.areas[5]}
      </Well>
      <br />
        <div className="card_coronado">
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
        <Grid>
        <Row><h3>Comments</h3></Row>
          {this.state.reviews.map((reviews, index) =>{
              return(
                <Col xs={12} md={8}>
                  <Col>
                    <div>{reviews.review_text}</div>
                  </Col>
                </Col>
              )
              }
              )}
        </Grid>
      </div>
      </div>
      </div>
    )
  }
}
