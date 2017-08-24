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
	       {this.props.track.sequence
          .map((beat, index) => this.renderSingleBeat(beat, index))}
	     </div>
    );
  }
}

Track.propTypes = {
  track: PropTypes.shape({
    sound: PropTypes.object
    sequence: PropTypes.array,
    volume: PropTypes.array,
    muted: PropTypes.array,
    name: PropTypes.String
    beatsPerMinute: PropTypes.number
    beatsPerMeasure: PropTypes.number
  }),
  currentBeat: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Track.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default Track;