import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

 

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: ''
    }
  }

  selectAColour = (e) => {
    return this.setState({selectedColor: e.target.id})
  }

  changeCellColour= ()=> {
      return this.state.selectedColor;
  }

  


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  


  render() {
    return (
      <div id="app">
        <ColorSelector selectAColour={this.selectAColour}/>
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
