import React, { Component, PropTypes } from 'react'
import Track from './Track'

/* A loop composed
 * of single sound pads
 * @extends Component
 */
class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.context.actions.playLoop();
  }
  render() {
    return (
	     <div className="Loop">
	     </div>
    );
  }
}

Loop.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

Loop.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default Loop;
