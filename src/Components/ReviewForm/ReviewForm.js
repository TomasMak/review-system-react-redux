import React from 'react'
import { Button, Col, Row, Well, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'
import { addReview } from '../../actions/reviewActions'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import '../../App.css'

class ReviewForm extends React.Component {
  state = { body: '', rating: '', success: '' }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    if (!this.state.body || !this.state.rating)
      return alert('Please fill all the fields necessary')
    else this.setState({
      success: 'Thank you, your review has been saved',
      body: '',
      rating: ''
    })
    const newReview = {
      body: this.state.body,
      rating: this.state.rating
    }
    this.props.addReview(newReview)
  }

  onStarClick = (nextValue) => {
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Well>
              <Form onSubmit={this.onSubmit}>
                <FormGroup
                ><ControlLabel>Body</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    name="body"
                    value={this.state.body || ''}
                    placeholder='Write you review here'
                    onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel >
                    Rating
              </ControlLabel>
                  <StarRatingComponent
                    name="rating"
                    value={this.state.rating || ''}
                    onStarClick={this.onStarClick.bind(this)}
                  /><Button
                    className="save-btn"
                    type="submit"
                  >Save review</Button>
                  {this.onSubmit ? (<p className="message" name="success">{this.state.success}</p>) : null}
                </FormGroup>
              </Form>
            </Well>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  review: state.review
})

export default connect(mapStateToProps, { addReview })(ReviewForm)