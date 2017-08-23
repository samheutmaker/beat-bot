import React, { Component, PropTypes } from 'react'
import Loop from './../components/Loop'

/* A JavaScript Drum Machine
 * @extends Component
 */
class BeatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="BeatBot">
        <Loop loop={this.props.loop} isMobile={this.props.isMobile}/>
      </div>
    );
  }
}

BeatBot.propTypes = {
  isMobile: PropTypes.bool,
};

BeatBot.contextTypes = {};

export default BeatBot;