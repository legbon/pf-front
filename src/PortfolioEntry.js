import React, { Component } from 'react';
import './PortfolioEntry.css';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

import moment from 'moment';

import CollapseText from './CollapseText';


class PortfolioEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  render() {
    const {item} = this.props;
    return (
        <Card className="PortfolioEntry-Body" block outline color="secondary">
          <CardBlock>
            <CardTitle>{item.title}</CardTitle>
          </CardBlock>
          <a href={item.live_url}><CardImg top width="100%"  src={item.image_url} alt={item.slug} /></a>
          <CardBlock>
            <CardSubtitle>{item.status} | <a className="link" href={item.live_url} target="_new">Live</a>{" | "}<a className="link"  href={item.source_url} target="_new">Source</a></CardSubtitle>
            <p>{ item.began ? "Began " + moment(item.began).fromNow() : "" } { item.ended ? " - Ended " + moment(item.ended).fromNow() : "" }</p>

            <CardText><CollapseText text={item.description} size={100} /></CardText>
          </CardBlock>
        </Card>
    );
  }
}

export default PortfolioEntry;
