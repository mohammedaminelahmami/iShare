import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home';
import LoginUser from './views/User/LoginUser';
import GetStarted from './views/User/GetStarted';
import Contact from './views/User/Contact';
import Pricing from './views/User/Pricing';
import Themes from './views/User/Themes';
import View from './views/User/View';
import Links from './views/User/Links';
import LoginAdmin from './views/Admin/LoginAdmin';
import React, { useState, useEffect } from 'react'
// import { UserContext } from './views/UserContext';
import Appearance from './views/User/Appearance';
import Profile from './views/User/Profile';
import Error404 from './components/Error404'
import axios from 'axios';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const usernameUrl = window.location.href.slice(22)

  useEffect(()=>{
    const formData = new FormData();
    formData.append('username', usernameUrl);
    
    axios.post('http://localhost/ishare/backend/user/getUser', formData)
    .then(function(response){
      const dataUsername = response.data.username
      setUsername(dataUsername)
      // console.log(dataUsername);
    })
    .catch(function(error){
      console.log(error);
    })
  }, [])

  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      setLoggedIn(true);
    }
  })

  return (
    <Router>
      <div className='parentApp'>
        <Switch>
          {/* <UserContext.Provider value='Test UseContext'> */}
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/login'>
              {!loggedIn&&
                <LoginUser />
              }
              {loggedIn&&
                <Home />
              }
            </Route>

            <Route path='/register'>
              <GetStarted />
            </Route>

            <Route path='/Themes'>
              <Themes />
            </Route>

            <Route path='/Pricing'>
              <Pricing />
            </Route>

            <Route path='/Contact'>
              <Contact />
            </Route>

            <Route path={'/'+username}>
              <View username={username} />
            </Route>

            <Route path='/links'>
              {!loggedIn&&
                <Home />
              }
              {loggedIn&&
                <Links />
              }
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/Appearance'>
              <Appearance />
            </Route>

            <Route path='/loginadmin'>
              <LoginAdmin />
            </Route>
          {/* </UserContext.Provider> */}

          <Route path='*'>
              <Error404 />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;