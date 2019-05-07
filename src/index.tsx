import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { postData } from './fetch-util';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const ws = new WebSocket('ws://localhost:3002/');
ws.onmessage = (event: any) => console.log(JSON.parse(event.data));
ws.onopen = () =>
  ws.send(
    JSON.stringify({
      suits: 4,
      ranks: 13,
      players: 2,
      seed: 'Hello from the websocket client!'
    })
  );

(async () =>
  console.log(
    await postData('http://localhost:3001/api/', {
      suits: 4,
      ranks: 13,
      players: 2,
      seed: 'Hello from the other repo!'
    })
  ))();
