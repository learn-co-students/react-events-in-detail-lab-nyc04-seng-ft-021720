// Code DelayedButton Component Here
import React from 'react';


export default class DelayedButton extends React.Component {

    delayedClick = (event) =>{
       event.persist()
       
       setTimeout( () =>{
           this.props.onDelayedClick(event)},this.props.delay)
    }

    render() {
        return <button type="button"
        onClick = {this.delayedClick}
        >Test Me!</button>
    }
  }