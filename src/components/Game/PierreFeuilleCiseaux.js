import React, { Component } from 'react';


class PierreFeuilleCiseaux extends Component {

 handleClick(e) {
    const value = e.target.textContent;
    this.props.setChoice(value);
  } 

  render() {
    return (
      <div className='btn-group btn-group-block'>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Pierre</button>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Feuille</button>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Ciseaux</button>
      </div>
    );
  }
}


export default PierreFeuilleCiseaux;