// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleOnClick = (e) => {
    return this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleOnClick(e)}>Click</button>
      </div>
    )
  }
}

export default CoordinatesButton