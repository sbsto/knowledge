import React from 'react';
import './styles/App.css';
import { DocView } from './components/'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>home</h1>
      </div>
      <div className="App-main-content">
        <DocView />
        {/* here, we'll have 2 components: 
          one for navigation between docs (left)
          one for viewing the doc and editing it.
         */}
      </div>
    </div>
  );
}

export default App;
