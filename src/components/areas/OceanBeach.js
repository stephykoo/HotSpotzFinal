import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader,
  Well
} from 'react-bootstrap';
import '../../css/OceanBeach.css'
import NavigationPages from '../../components/NavigationPages'

export default class OceanBeach extends Component {
  constructor() {
    super();
    this.state = {
      area: {
        name: 'Ocean Beach',
        overallScore: '2.75',
        parkingScore: '3',
        cleanlinessScore: '2',
        safetyScore: '3',
        affordabilityScore: '3',
        familyFriendliness: true
      },
      comments: [

      ]
    };
  }

  render() {
    return (
      <div>
      <NavigationPages />
      <div className="center_oceanbeach">
      <Well className = "opa" id="area-name">
      {this.state.area.name}
      </Well>
        <div className="card_oceanbeach">
        <Grid>
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
      </div>
    )
  }
}
