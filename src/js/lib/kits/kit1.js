import Sound from './../models/Sound'

export default function loadDrumKit() {
  const sounds = [
    {
      name: 'Accoustic Snare',
      uri: 'samples/snare.wav',
    },
    {
      name: 'Hi Hat',
      uri: 'samples/hat.wav',
    },
    {
      name: 'Classic Kick',
      uri: 'samples/kick.wav',
    },
    {
      name: 'Hi Hat 2',
      uri: 'samples/hat2.wav',
    },
    {
      name: 'Accoustic Tom 2',
      uri: 'samples/tom2.wav'
    }
  ];

  return sounds.map((sound, key) => new Sound(sound.name, sound.uri, key));
}