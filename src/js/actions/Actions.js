import NPECheck from './../lib/util/NPECheck'
import * as Reducers from './../reducers/BeatBotReducers'
import Kit from './../lib/kits/kit1'


export function getState() {
  return {
    loops: []
  }
}

export function loadKit(){
  return addLoop.call(this)
  .then(() => Kit().map(sound => trackState(sound)))
  .then((tracks) => Reducers.updateLoop.call(this, 0, {tracks: tracks}));
}

export function addLoop() {
  let newIdx = NPECheck(this.state, 'loops/length', 0);
  return Reducers.updateLoop.call(this, newIdx, loopState());
}

export function loopState() {
  return {
    tracks: [],
    isPlaying: true,
    currentBeat: 0,
    beatsPerMinute: 300,
    beatsPerMeasure: 4,
    playInterval: null,
  }
}

export function addTrack(loopIdx) {
  let newIdx = NPECheck(this.state, `loops/${loopIdx}/tracks/length`, 0);
  return Reducers.updateTrack.call(this, loopIdx, newIdx, trackState());
}

export function togglePlayLoop(loopIdx, isPlaying) {
  let playInterval = null;
  
  let loop = this.state.loops[loopIdx];

  if(isPlaying) {
    playInterval = setInterval(() => {
      let loop = this.state.loops[loopIdx];
      // console.log(loop.currentBeat);
      return Reducers.updateLoop.call(this, loopIdx, {
        isPlaying,
        currentBeat: (loop.currentBeat + 1) === 16 ? 0 : (loop.currentBeat + 1),
      })
    }, 60000 / loop.beatsPerMinute);
  } else {
    clearInterval(loop.playInterval);
  }

  return Reducers.updateLoop.call(this, loopIdx, {
    isPlaying,
    playInterval,
  });
}

function trackState(sound = null) {
  return {
    sound: sound,
    sequence: new Array(16).fill(false),
    volume: new Array(16).fill(1),
    muted: false,
    name: '',
    beatsPerMinute: null,
    beatsPerMeasure: null
  };
}

export function setTrackSound(loopIdx, trackIdx, sound) {
  return Reducers.updateTrack.call(this, loopIdx, trackIdx, {
    sound
  });
}

export function toggleTrackSequence(loopIdx, trackIdx, seqIdx) {
  let sequence = NPECheck(this.state, `loops/${loopIdx}/tracks/${trackIdx}/sequence`, []);
  sequence[seqIdx] = !sequence[seqIdx];
  return Reducers.updateTrack.call(this, loopIdx, trackIdx, {
    sequence
  });
}

export function toggleTrackMuted(loopIdx, trackIdx, muted) {
  return Reducers.updateTrack.call(this, loopIdx, trackIdx, {
    muted
  });
}
