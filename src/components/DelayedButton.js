// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  
  handleOnClick = (e) => {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e);}, this.props.delay);
  } 

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleOnClick(e)}>Delay</button>
      </div>
    )
  }
}

export default DelayedButton