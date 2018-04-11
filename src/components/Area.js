import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader
} from 'react-bootstrap';
import NavigationPages from './NavigationPages'
import '../css/NavigationPages.css';

export default class Area extends Component {
  constructor() {
    super();
    this.state = {
      area: {
        name: 'Name of Fake Area',
        overallScore: '2.75',
        parkingScore: '3',
        cleanlinessScore: '2',
        safetyScore: '3',
        affordabilityScore: '3',
        familyFriendliness: true
      },
      comments: [
        {
          author: 'Jane Doe',
          photo: 'http://via.placeholder.com/200x200',
          text: 'Disgusting, will never return'
        },
        {
          author: 'John Doe',
          photo: 'http://via.placeholder.com/200x200',
          text: 'Smells like apple pie'
        },
        {
          author:'Doe Doe',
          photo: 'http://via.placeholder.com/200x200',
          text: 'Too many birds flying around'
        }
      ]
    };
  }

  render() {
    return (
      <div>
      <NavigationPages />
      <div>
        <Grid>
          <Row>
            <PageHeader id="area-name">
              {this.state.area.name}
            </PageHeader>
          </Row>
          <Row id="overall-score">
            Overall: {this.state.area.overallScore}
          </Row>
          <Row id="parking-score">
            Parking: {this.state.area.parkingScore}
          </Row>
          <Row id="cleanliness-score">
            Cleanliness: {this.state.area.cleanlinessScore}
          </Row>
          <Row id="safety-score">
            Safety: {this.state.area.safetyScore}
          </Row>
          <Row id="affordability-score">
            Affordability: {this.state.area.affordabilityScore}
          </Row>
          <Row id="family-friendliness">
            Family-friendly? {
              (this.state.area.familyFriendliness) ? 'Yes' : 'No'
            }
          </Row>
        </Grid>
        <Grid>
          {this.state.comments.map((comment, index) => {
            return (

              <Panel id="comment-row" key={index}>
                <Panel.Heading>
                  <Panel.Title>
                    <h5 id="comment-author">Review by {comment.author}</h5>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Row>
                    <Col id="comment-photo">
                      <img src={comment.photo} alt="comment" />
                    </Col>
                    <Col id="comment-text">
                      {comment.text}
                    </Col>
                  </Row>
                </Panel.Body>
              </Panel>
            )
          })}
        </Grid>
      </div>
      </div>
    )
  }
}
