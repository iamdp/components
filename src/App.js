import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Budget from './components/budget/budget';
import Makeithappennav from './components/navbar/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <div>
              <Makeithappennav />
              <Budget />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
