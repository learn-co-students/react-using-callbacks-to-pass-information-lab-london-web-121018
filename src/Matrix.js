import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      selectedColor: null
    }
  }

  setSelectedColor = (color) => {
    this.setState({selectedColor: color})
  };

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorSelected={this.setCellState}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setCellState = () => {
    return this.state.selectedColor
  };
  render() {
    return (
      <div id="app">
        <ColorSelector ColorSelector={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
