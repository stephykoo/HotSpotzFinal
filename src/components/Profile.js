import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Login.css';
import AuthService from '../services/AuthService'
import StarRatingComponent from 'react-star-rating-component';
import NavigationPages from './NavigationPages'
import '../css/NavigationPages.css';
import withAuth from './withAuth'
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const apiUrl = env.REACT_APP_API_URL

const Auth = new AuthService()
const loggedUser = getLoggedUser()

function getLoggedUser(){
  if(Auth.loggedIn()){
    return Auth.getUserId()
  }
}


class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
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
  fetch(`${apiUrl}/users/${loggedUser}`).then((rawResponse)=>{
    // rawResponse.json() returns a promise that we pass along
    return rawResponse.json()
  }).then((parsedResponse) => {
    // when this promise resolves, we can work with our data
    let userData = parsedResponse
      this.setState({user: parsedResponse})
  })
  }

  componentDidMount(){
    fetch(`${apiUrl}/reviews_by_user_id/${loggedUser}`).then((rawResponse)=>{
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
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Row>
              <p>{this.state.user.avatar_base}</p>
            </Row>
            <Row id="name">
            <b>Name: <br /></b>
              <p>{this.state.user.name}</p>
            </Row>
            <Row id="username">
            <b>Username: <br /></b>
              <p>{this.state.user.username}</p>
            </Row>
          </Col>

          <div className="card">
          <Col>
            <Row><h1 className = "review">Your Reviews</h1></Row>
          {this.state.reviews.map((review, index) =>{
            return(
          <Col xs={12} md={8}>
            <Col>
              <h2>{this.state.areas[review.area_id - 1]} {review.area_rating}</h2>
              <div>Dining: <StarRatingComponent starCount={5} value={review.dining}/> </div>

              <div>Parking: <StarRatingComponent starCount={5} value={review.parking}/></div>

              <div>Cleanliness: <StarRatingComponent starCount={5} value={review.cleanliness}/></div>

              <div>Safety: <StarRatingComponent starCount={5} value={review.safety}/></div>

              <div>Price Per Person: ${review.price}</div>

              <div>Review: {review.review_text}</div>
            </Col>
          </Col>
        )
        }
        )}
        </Col>
        </div>

        </Row>
      </Grid>
      </div>
    );
  }
}

export default withAuth(Profile)
