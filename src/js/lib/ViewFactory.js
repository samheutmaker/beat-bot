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

  state = value;
  return 'GOOD';
}

function viewProxy() {
  return {
    handler: function(target, thisArg, args) {
      console.log(target);
      console.log(thisArg);
      console.log(args);
    }
  }
}

export default function ViewFactory(Class) {
  return function View(view, stateLocation) {

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
        view.setState(state, () => resolve());
      })
    }

    const updateTrack = function(newState = {}) {
      return setState({
        ...getState(),
        ...newState
      });
    }

    return new Proxy(new Class(), viewProxy);
  }
}
