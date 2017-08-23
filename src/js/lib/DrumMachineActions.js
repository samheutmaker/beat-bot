import NPECheck from './util/NPECheck'

function loadDrumKit() {
  const sounds = [
    {
      name: 'Accoustic Snare',
      uri: 'samples/snare-acoustic01.mp3',
    },
    {
      name: 'Hi Hat',
      uri: 'samples/hihat-dist01.mp3',
    },
    {
      name: 'Classic Kick',
      uri: 'samples/kick-classic.mp3',
    },
    {
      name: 'Accoustic Tom 1',
      uri: 'samples/tom-acoustic01.mp3',
    },
    {
      name: 'Accoustic Tom 2',
      uri: 'samples/tom-acoustic02.mp3'
    }
  ];

  return sounds.map((sound, key) => new Sound(sound.name, sound.uri, key));
}

export function drumMachineState() {
  return {
    
    isPlaying: false,
    currentBeat: 0,
    beatsPerMinute: 80,
    beatsPerMeasure: 4,
    playInterval: null
  };
}

export function resetDrumMachineState() {
  return setDM.call(this, drumMachineState());
}

export function clickSoundPad(soundPadKey, index) {
  let dm = DM.call(this);
  dm.pads[soundPadKey] = dm.pads[soundPadKey].play().toggleBeat(index);
  return setDM.call(this, dm);
}

export function playDrumMachine(){
  setInterval(() => { 
    let dm = DM.call(this);
    let currentBeat = dm.currentBeat;

    dm.pads.forEach((pad) => {
      if(pad.track[currentBeat]) {
        pad.play();
      }      
    });
    currentBeat++;
    currentBeat %= 16;
    setDM.call(this, {
      currentBeat
    })
  }, 60000/(this.state.drumMachine.beatsPerMinute*this.state.drumMachine.beatsPerMeasure));
}
