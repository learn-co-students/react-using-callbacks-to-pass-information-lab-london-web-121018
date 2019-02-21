import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  setSelected = (hex) => {
    console.log(hex)
    this.setState({
      selected: hex
    })
  }

  getSelected = () => {
    return this.state.selected
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell cSelected={this.getSelected} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelected={this.setSelected}/>
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
