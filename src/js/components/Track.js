import React, { Component, PropTypes } from 'react'
import NPECheck from './../lib/util/NPECheck'

/* A single sound
 * @extends Component
 */
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {

  }
  toggleSequence(idx){
    this.context.actions.toggleTrackSequence(
      this.props.loopIdx,
      this.props.trackIdx,
      idx 
    );
  }
  toggleMuted(muted){
   this.context.actions.toggleTrackMuted(
      this.props.loopIdx,
      this.props.trackIdx,
      !muted
    ); 
  }
  renderControls(track){
    return (
      <div className="Controls">
        <div className="TextButton" onClick={() => this.toggleMuted(track.muted)}>
        { 
         track.muted ? <span>&#128263;</span>  
                     : <span>&#128265;</span>   
        }
        </div>
        <div className="TextButton"></div>
        <div className="TextButton"></div>
        <div className="SoundName">{track.sound.name}</div>
      </div>
    );
  }
  renderSingleBeat(beat, idx){
    // console.log(this.props.currentBeat);
    // console.log(beat, idx);
    
    if(this.props.currentBeat == idx && beat) {
      console.log('PLAY');
      let track = NPECheck(this.props, `loops/${this.props.loopIdx}/tracks/${this.props.trackIdx}`, {});
      track.sound.play();
    }

    return (
      <div key={idx} 
           className={`Beat ${this.props.currentBeat == idx ? 'Active' : beat ? 'On' : 'Off'}`} 
           onMouseDown={() => this.toggleSequence(idx)}/>
    );
  }
  render() {
    let track = NPECheck(this.props, `loops/${this.props.loopIdx}/tracks/${this.props.trackIdx}`, {});
    return (
	     <div className="Track">
         {this.renderControls(track)}
	       {track.sequence
          .map((beat, idx) => this.renderSingleBeat(beat, idx))}
	     </div>
    );
  }
}

Track.propTypes = {
  trackIdx: PropTypes.number.isRequired,
  loopIdx: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Track.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default Track;