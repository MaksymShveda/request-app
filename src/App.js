import User from './components/User/User';
import Header from './components/Header/Header';

import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-content'>
        <div className='filter-panel'>
          <input type="text" placeholder='Search By First Name...' className='search-input'></input>
          <input type="text" placeholder='Search By Last Name...' className='search-input'></input>
          <input type="text" placeholder='Search By Age...' className='search-input'></input>
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
