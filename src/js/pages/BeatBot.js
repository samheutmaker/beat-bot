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
  componentDidMount() {
    this.context.actions.addLoop().then(() => console.log(this.props));
    this.context.actions.loadKit();
  }
  renderLoops(){
    return (
      <div className="Loops">
        {this.props.loops.map((loop, idx) => <Loop key={idx} {...this.props} loopIdx={idx}/>)}
      </div>
    );
  }
  render() {
    return (
      <div className="BeatBot">
        {this.renderLoops()}
      </div>
    );
  }
}

BeatBot.propTypes = {
  isMobile: PropTypes.bool,
};

BeatBot.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default BeatBot;