import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

import Portfolio from './Portfolio';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      projects: []
    };
  }


  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("http://pf.dev/api/all")
        .then(function(result) {    
          _this.setState(result.data);
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <Container fluid={true}>
            <h1>Leo's Portfolio</h1>
          </Container>
        </div>
        <div className="App-Body">
          <Container fluid={true}>
            <Row>
              <Col><hr /></Col>
            </Row>
            <Portfolio data={this.state.projects} header={"Projects"}/>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
