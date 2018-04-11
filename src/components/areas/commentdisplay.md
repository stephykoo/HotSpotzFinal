<Grid>
  {this.state.reviews.map((reviewText, index) => {
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
