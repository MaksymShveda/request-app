import User from './components/User/User';
import Header from './components/Header/Header';

import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';


function App() {
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitial] = useState([]);
  const [searchValue, setSearch] = useState({name:'', lastname:'', age:''})
  const [isLoaded, setLoaded] = useState(false);

  

  useEffect(()=>{
    const requestForUsers = async () => {
      const response = await fetch('https://venbest-test.herokuapp.com/');
      const usersData = await response.json();
      setUsers((previous) => usersData);
      setInitial((previous) => usersData);
      setLoaded(true);
    };
    requestForUsers();
  },[])

  useEffect(() => {
    setUsers(initialUsers);
    setUsers(previous => previous.filter((user) => {
      return user.name.toLowerCase().includes(searchValue.name.toLowerCase())
      && user.lastname.toLowerCase().includes(searchValue.lastname.toLowerCase())
    }))
    if(searchValue.age){
      setUsers(previous => previous.filter((user) => user.age == searchValue.age ))
    }
  }, [searchValue])

  const handleSearch = (event) => {
    setSearch((previous) => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  };

  return (
    <div className="App">
      <Header/>
      <div className='main-content'>
      {isLoaded ?
          <>
            <div className='filter-panel'>
              <input
              type="text"
              name="name" 
              placeholder='Search By First Name...' 
              className='search-input'
              onInput={(e) => handleSearch(e)}
              />
              <input
              type="text" 
              name="lastname"
              placeholder='Search By Last Name...' 
              className='search-input'
              onInput={(e) => handleSearch(e)}
              />
              <input
              type="text"
              name="age"
              placeholder='Search By Age...' 
              className='search-input'
              onInput={(e) => handleSearch(e)}
              />
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
