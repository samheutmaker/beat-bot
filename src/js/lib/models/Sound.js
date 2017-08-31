export default class Sound {
  constructor(name, sampleUri, key) {
    this.name = name;
    this.sampleUri = sampleUri;
    this.key = key;
    this.audio = new Audio(sampleUri);
  }
  play() {
  	this.audio.play();
  }
}