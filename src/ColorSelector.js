import React, { Component } from 'react';
//import Matrix from './Matrix';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let color = () => { this.props.selectColor(str) }
      return <div key={idx} className="color-swatch" style={{ backgroundColor: str }} onClick={color} />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
