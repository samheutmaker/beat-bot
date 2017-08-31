

function updateRecursive(state, deepKey, deepState) {
  let keys = deepKey.split('/');

  function update(state = {}, keys = [], deepState = {}) {
    if (!keys.length) {
      return deepState;
    }

    let key = keys.shift();

    let isArray = !isNaN(parseInt(keys[0]));
    
    console.log(key, keys[0], isArray);

    if(isArray) {

      let newState = {
        ...state,
        [key]: [
          ...state[key]
        ]
      };
      newState[key]

      return newState;
    }


    return {
      ...state,
      [key]: {
        ...state[key],
        ...update(state[key], keys, deepState)
      }
    };
  }

  return update(state, keys, deepState);
}


let state = {
  tracks: [{
    volume: {
      key: 1
    }
  }]
}


let newState = updateRecursive(state, 'tracks/0/volume', {
  key: 2
});
console.log(newState);


function createOrSetDeepProperty(state, deepKey, deepState) {
  let keys = deepKey.split('/');
  while (keys.length) {
    let key = keys.shift();
    let isArray = !isNaN(parseInt(keys[0]));
    if (!state[key]) state[key] = isArray ? [] : {};
    state = state[key];
  }
}


function deepModify(state = {}, newState = {}) {
  function modifyDeepProperty(state, deepKey, newState) {
    let deepState = NPECheck(state, deepKey, {});
    deepState = {
      ...curState,
      ...newState
    };
    createOrSetDeepProperty(state, deepKey, deepState);
    return state;
  }
}