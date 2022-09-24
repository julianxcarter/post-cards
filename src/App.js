import { useEffect, useState } from 'react';
import UserCardComponent from './UserComponent';
import logo from './logo.svg';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

function fetchUsers() {
  return fetch(`${JSON_PLACEHOLDER_URL}/users`).then(res => res.json()).catch(e => console.log(e));
}

function App() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    fetchUsers().then(users => setUsersArr(users));
  }, [])

  return (
    <>
      <header style={{backgroundColor: '#282c34', height:'7vh'}} className='text-2xl xl:text-4xl py-3 text-gray-100 text-base text-center italic py-auto'>
        <h1>Julian's Social Media Site?</h1>
      </header>
      <div style={{height:'93vh'}} className='bg-gray-300 bg-opacity-100'>
        <section id='users'>
          <h2>
            Users
          </h2>
          <div className='flex mx-12 flex-wrap justify-center'>
          {usersArr.map(arrObj => <UserCardComponent key={`usercard-${arrObj.id}`} userObj={arrObj}></UserCardComponent>)}
          </div>
        </section>
        <section id = 'posts'>

        </section>
      </div>
    </>
  );
}

export default App;
