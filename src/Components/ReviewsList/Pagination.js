import React from 'react';
import { connect } from 'react-redux'
import { pageBack, pageForward } from '../../actions/reviewActions'

class Pagination extends React.Component {

    renderPagination = () => {
        const { currentPage, reviews } = this.props.review
        const cp = currentPage
        if (cp === 0 && reviews.length === 5) {
            return (
                <div className="card-pagination">
                    <span>Page 1 </span>
                    <span><a onClick={() => this.props.pageForward(5, 10, 1)}>Next</a></span>
                </div>
            )
        } else if (cp > 0 && reviews.length === 5) {
            return (
                <div className="card-pagination">
                    <span><a onClick={() => this.props.pageBack((cp - 1) * 5, cp * 5, -1)}>Back</a></span>
                    <span>Page {(cp + 1)}</span>
                    <span><a onClick={() => this.props.pageForward((cp + 1) * 5, (cp + 2) * 5, 1)}>Next</a></span>
                </div>
            )
        } else if (cp === 0 && reviews.length < 5) {
            return (
                <div className="card-pagination">
                    <span>All reviews</span>
                </div>
            )
        }
        else {
            return (
                <div className="card-pagination">
                    <span><a onClick={() => this.props.pageBack((cp - 1) * 5, cp * 5, -1)}>Back</a></span>
                    <span>Page {(cp + 1)}</span>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.renderPagination()}</div>
        )
    }
}

const mapStateToProps = (state) => ({ review: state.review })

export default connect(mapStateToProps, { pageBack, pageForward })(Pagination)