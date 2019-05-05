import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { postData } from './fetch-util';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

(async () =>
  console.log(
    await postData('http://localhost:3001/api/', {
      suits: 4,
      ranks: 13,
      players: 2,
      seed: 'Hello from the other repo!'
    })
  ))();
