import User from './components/User/User';
import Header from './components/Header/Header';

import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';


function App() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setLoaded] = useState(false)

  useEffect(()=>{
    const requestForUsers = async () => {
      const response = await fetch('https://venbest-test.herokuapp.com/');
      const usersData = await response.json();
      setUsers((previous) => usersData);
      setLoaded(true);
    }
    requestForUsers();
  },[])


  return (
    <div className="App">
      <Header/>
      <div className='main-content'>
      {isLoaded ?
          <>
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
            <div className='users-wrapper'>
              {users.map((user) => <User key={user.name} user={user}/>)}
            </div>
            </>
          :( <Loading/> )}
      </div>
    </div>
  );
};

export default App;
