import React, { Component } from 'react';
import './PortfolioEntry.css';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

import moment from 'moment';

class Portfolio extends Component {
  render() {
    const {item} = this.props;
    return (
    <div>
      <Card className="PortfolioEntry-Body" block outline color="secondary">
        <CardBlock>
          <CardTitle>{item.title}</CardTitle>
        </CardBlock>
        <a href={item.live_url}><CardImg top width="100%"  src={item.image_url} alt={item.slug} /></a>
        <CardBlock>
          <CardSubtitle>{item.status} | <a className="link" href={item.live_url} target="_new">Live</a>{" | "}<a className="link"  href={item.source_url} target="_new">Source</a></CardSubtitle>
        </CardBlock>  
        <CardBlock>
          <CardSubtitle>{ item.began ? "Began " + moment(item.began).fromNow() : "" } { item.ended ? " - Ended " + moment(item.ended).fromNow() : "" }</CardSubtitle>
        </CardBlock>
        <CardBlock>
          <CardText>{item.description}</CardText>
        </CardBlock>
      </Card>
    </div>
    );
  }
}

export default Portfolio;
