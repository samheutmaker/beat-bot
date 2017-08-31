import NPECheck from './../util/NPECheck'
import ViewFactory from './../ViewFactory'

class Track {
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
    this.sequence[index] = !this.sequence[index];
    // updateTrack(this);
  }
}


