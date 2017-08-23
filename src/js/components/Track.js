import React, { Component, PropTypes } from 'react'

/* A single sound
 * @extends Component
 */
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSingleBeat(beat, index){
    return (
      <div key={index} 
           className={`Beat ${this.props.currentBeat == index ? 'Active' : beat ? 'On' : 'Off'}`} 
           onMouseDown={() => this.context.actions.clickTrack(this.props.soundPad.key, index)}/>
    );
  }
  render() {
    return (
	     <div className="Track">
	       
	     </div>
    );
  }
}

Track.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    sampleUri: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  }),
  currentBeat: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Track.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default Track;