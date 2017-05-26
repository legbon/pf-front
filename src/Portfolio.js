import React, { Component } from 'react';
import _ from 'lodash';
import './Portfolio.css';
import PortfolioEntry from './PortfolioEntry';

import { Row, Col } from 'reactstrap';

class Portfolio extends Component {
  render() {

    const items = _.map(this.props.data, (item, key) => {
      return (
      <Col key={key} xs="12" sm="6" md="6" lg="4">
          <PortfolioEntry  item={item} />
      </Col>
        );
    });
    return (
      <div className="Portfolio">
        <div className="Portfolio-Header">
            <h2>{this.props.header}</h2>
        </div>
        <div className="Portfolio-Body">
          <Row>
            {items}
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
