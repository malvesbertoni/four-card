import React from 'react';
import './App.css';

import imgSupervisor from './images/icon-supervisor.svg';

function App() {
  return (
    <div className="main-wrapper">
      <header>
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful</p>
      </header>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-header">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
          </div>
          <div className="card-image">
            <img src="imgSupervisor" alt="Supervisor"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
