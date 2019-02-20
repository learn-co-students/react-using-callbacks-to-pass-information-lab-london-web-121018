import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = e => {
    console.log(this.state.color)
    this.setState({
      color: this.props.getMatrixState()
    })
  }

  render() {
    return (
      <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
      </div >
    )
  }

}
