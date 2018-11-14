import React from 'react';

class CoordinateButton extends React.Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {
    return (
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }
}

export default CoordinateButton