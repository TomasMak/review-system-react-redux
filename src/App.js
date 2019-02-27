import React from 'react'
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ReviewsList from './Components/ReviewsList/ReviewsList'
import { Col, Row } from 'react-bootstrap'
import store from './store'
import { Provider } from 'react-redux'

function styles() {
  return {
    marginTop: '20px'
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={styles()}>
          <Row>
            <Col md={4} mdOffset={4}>
              <ReviewForm />
              <ReviewsList />
            </Col>
          </Row>
        </div>
      </Provider>
    )
  }
}

export default App
