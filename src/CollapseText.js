import React, { Component } from 'react'; 

class CollapseText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  truncate(string, len){
     if (string.length > len)
        return string.substring(0,len) + '...';
     else
        return string;
  };

  shouldTruncate(string, len) {
    if (string.length > len) return true;
    return false;
  }

  display(text, size) {
    if(this.shouldTruncate(text, size)) {
      if(this.state.collapsed) {
        return (
          <div>
            <p> {this.truncate(text, size)} <button className="btn-link link-butt" onClick={() => this.setState({collapsed: !this.state.collapsed})}> read more </button> </p>
          </div>
        );
      } else {
        return (
          <div>
            <p> {text} <button className="btn-link link-butt"  onClick={() => this.setState({collapsed: !this.state.collapsed})}> read less </button> </p>
          </div>
        );
      }
    } else {
      return (
        <div>
        <p> { text } </p>
        </div>
      );
    }
  }

  render() {
    const { size, text } = this.props;
    return (
      <div>{this.display(text, size)}</div>
    );
  }
}

export default CollapseText;
