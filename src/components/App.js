import React from "react";
import createStore from './store';
import reducer from './reducers';
import "./App.css";

const initialState = { messages: [] };

const store = createStore(reducer,initialState);

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}
