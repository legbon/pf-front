import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';
import './loader.css';

import Portfolio from './Portfolio';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }


  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("http://pf.dev/api/all")
        .then(function(result) {
          setTimeout(() => {

          _this.setState(result.data);
          }, 2500)
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  display() {
    
    if(this.state.projects.length === 0 ) {
      return (<div className="loader">Loading...</div>);
    } else {
      return (<Portfolio data={this.state.projects} header={"Projects"} />);
    }

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
            {this.display()}
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
