import action from './actions/action.js';
import store from './store/createStore.js';

function reducer(state,action){
  if(action.type === 'ADD_MESSAGE'){
    return state.messages.concat(action.message);
  }
  else{
    return state;
  }
}

export default reducer;