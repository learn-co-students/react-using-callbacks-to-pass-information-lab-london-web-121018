import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  updateColor = (eve) => {
   eve.target.style.backgroundColor = this.props.cSelected()
  }
  
  render() {
    return (
      <div className="cell" onClick={this.updateColor} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
