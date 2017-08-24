import NPECheck from './util/NPECheck'
import Track from './models/Track'

class Loop {
  constructor() { 
    this.tracks = [];
    this.isPlaying = false;
    this.currentBeat = 0;
    this.beatsPerMinute = 80;
    this.beatsPerMeasure = 4;
    this.playInterval = null;
  }
  togglePlay(){
    this.isPlaying = !this.isPlaying;
  }
  addTrack(){
    this.tracks.push(new Track());
  }
}

