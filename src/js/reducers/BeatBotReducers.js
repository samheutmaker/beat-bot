import NPECheck from './../lib/util/NPECheck'

export function set(newState) {
  return new Promise((resolve, reject) => {
    this.setState(newState, resolve);
  });
}

export function updateLoop(loopIdx, newState = {}) {
  let loops = [...this.state.loops];
  let loop = {
    ...(loops[loopIdx] || {}),
    ...newState
  };
  loops[loopIdx] = loop;
  return set.call(this, {
    loops
  });
}

export function updateTrack(loopIdx, trackIdx, newState = {}) {
  let track = {
    ...NPECheck(this.state, `loops/${loopIdx}/tracks/${trackIdx}`, {}),
    ...newState
  };

  let loop = this.state.loops[loopIdx];
  loop.tracks[trackIdx] = track;
  return updateLoop.call(this, loopIdx, loop);
}
