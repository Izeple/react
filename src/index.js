import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyTestCode from './MyTestCode';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<MyTestCode />, document.getElementById('root'));


serviceWorker.unregister();
