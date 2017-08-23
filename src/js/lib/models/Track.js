import NPECheck from './../util/NPECheck'

function deepModify(state, location, value) {
  let keys = location.split('/');
  while (keys.length > 0) {
    let prop = keys.shift();
    if (!state[prop] && state[prop] != 0) {
      return -1;
    } else {
      state = state[prop];
    }
  }

  state = 
  return

}

export default function TrackFactory(view, stateLocation) {

  const getState = function() {
    let state = NPECheck(view.state, stateLocation, null);
    if (!state) console.log('STATE IS NULL');
    return state || {};
  }

  const setState = function(newState) {
    return new Promise((resolve) => {
      let state = {...view.state
      };
      deepModify(state, stateLocation, newState);
      view.setState(newState, () => resolve());
    })
  }

  const updateTrack = function(newState = {}) {
    return setState({
      ...getState(),
      ...newState
    });
  }

  return class Track {
    constructor() {
      this.sound;
      this.sequence = new Array(16).fill(false);
      this.volume = new Array(16).fill(1);
      this.muted = new Array(16).fill(false);
      this.name;
      this.beatsPerMinute;
      this.beatsPerMeasure;
    }

    toggleSequence(index) {

    }

  }

}