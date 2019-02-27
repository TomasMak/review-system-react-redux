import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getReviews, deleteReview } from '../../actions/reviewActions'
import StarRatingComponent from 'react-star-rating-component'
import '../../App.css'
import Pagination from './Pagination'

class ReviewsList extends React.Component {
  state = { reviews: [], currentPage: 0 }

  componentDidMount() { setTimeout(() => { this.props.getReviews() }, 100) }

  onDeleteClick = (id) => { this.props.deleteReview(id) }

  render() {
    const { reviews } = this.props.review
    return (
      <div className="review-list">
        <Pagination />
        <ListGroup>
          <TransitionGroup>
            {reviews.map((review) => (
              <CSSTransition key={review.id} timeout={400} classNames="fade">
                <ListGroupItem>
                  <p>{review.body}</p>
                  <StarRatingComponent
                    name="star-rating"
                    value={review.rating}
                  />
                  <Button
                    onClick={this.onDeleteClick.bind(this, review.id)}
                    className="delete-btn"
                  >Delete review</Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ review: state.review })

export default connect(mapStateToProps, { getReviews, deleteReview })(ReviewsList)
