import React, { Component } from 'react'

/* A React component that displays a simple loading animation
 * @extends Component
 */
export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: null
    }
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          timer: this.state.timer + 1
        });
      }, 100)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
  	let ellipsis = '';
  	while(ellipsis.length < this.state.timer % 5) ellipsis += '.';
    return (
    	<div className="Loader">{`Initializing Client${ellipsis}`}</div>
    );
  }
}