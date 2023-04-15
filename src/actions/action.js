const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const add = {
  type: ADD_MESSAGE,
  message : 'add the message that you want to type there!: '
}

const remove = {
  type: 'REMOVE_MESSAGE',
  message: 'removing the message' 
}

const actions = {add,remove};

export default actions;