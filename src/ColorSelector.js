import React, { Component } from 'react';

export default class ColorSelector extends Component {

  switchColour = e => {
    let colour = e.target.style.backgroundColor
    this.props.setColour(colour)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{ backgroundColor: str }} onClick={this.switchColour} />
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
