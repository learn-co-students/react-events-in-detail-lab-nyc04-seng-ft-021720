// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component {



    arrayCreate = (e) =>{
      let coordinates = []
      coordinates.push(e.clientX, e.clientY)
      
      this.props.onReceiveCoordinates(coordinates)
    }

    render() {
      return <button type="button"
              onClick = {this.arrayCreate}
              >Click Me!</button>
    }
  }