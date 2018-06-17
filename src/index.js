import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello name="Tahara"/>, document.getElementById('root'));
registerServiceWorker();
