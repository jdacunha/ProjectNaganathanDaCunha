import React, { Component } from 'react';

class Result extends Component {

  render() {
    let result = null;
    if (this.props.user1Result === 3) {
      result = <div className='result bg-success text-light d-flex'>USER1 WON !</div>
    }
    if (this.props.user2Result === 3) {
      result = <div className='result bg-error text-light d-flex'>USER2 WON !</div>
    }

    return (
      <div>
        {result}
      </div>
    );
  }

}

export default Result;