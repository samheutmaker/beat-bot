import React, { Component, PropTypes } from 'react'
import NPECheck from './../lib/util/NPECheck'
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

  }
  addTrack(){
    this.context.actions.addTrack(this.props.loopIdx);
  }
  togglePlayLoop(isPlaying){
    this.context.actions.togglePlayLoop(this.props.loopIdx, !isPlaying);
  }
  renderLoopHeader(loop){
    return (
      <div className="Header">
        <div className="Controls">
          <div className="TextButton" onClick={() => this.togglePlayLoop(loop.isPlaying)}>
          { 
           loop.isPlaying ? <span>&#128265;</span>  
                          : <span>&#128263;</span>   
          }
          </div>
          <div className="TextButton"></div>
          <div className="TextButton"></div>
        </div>
        <div className="AddTrackButton" onClick={() => this.addTrack()}>
          Add Track
        </div>
      </div>
    );
  }
  renderTracks(loop){
    return (
      <div className="Tracks">
        {loop.tracks.map((track, idx) => <Track key={idx}
                                           trackIdx={idx} 
                                           currentBeat={loop.currentBeat}
                                           {...this.props} /> )}
      </div>
    );
  }
  render() {
    let loop = NPECheck(this.props, `loops/${this.props.loopIdx}`, {});

    return (
	     <div className="Loop">
         {this.renderLoopHeader(loop)}
         {this.renderTracks(loop)}
	     </div>
    );
  }
}

Loop.propTypes = {
  loopIdx: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Loop.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default Loop;
