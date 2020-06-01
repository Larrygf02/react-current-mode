import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// If you previously had:
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// You can opt into Concurrent Mode by writing:

ReactDOM.unstable_createRoot(
  document.getElementById('root')
).render(<App />);
