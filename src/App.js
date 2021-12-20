import User from './components/User/User';
import Header from './components/Header/Header';

import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-content'>
        <div className='filter-panel'>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <div className='sex checkboxes'>
            <div>
              <input type="checkbox" name="male"/>
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input type="checkbox" name="female"/>
              <label htmlFor='female'>Female</label>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
