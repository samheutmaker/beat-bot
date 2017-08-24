import Sound from './../models/Sound'

export default function loadDrumKit() {
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