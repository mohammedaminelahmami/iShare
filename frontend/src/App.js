import './App.css';
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home';
import LoginUser from './views/User/LoginUser';
import GetStarted from './views/User/GetStarted';
import Contact from './views/User/Contact';
import Pricing from './views/User/Pricing';
import Themes from './views/User/Themes';
import View2 from './views/User/View2';
import Links from './views/User/Links';
import LoginAdmin from './views/Admin/LoginAdmin';
import Appearance from './views/User/Appearance';
import Profile from './views/User/Profile';
import Error404 from './components/Error404'
import Overview from './views/Admin/Overview';
import UsersAction from './views/Admin/UsersAction';
import AnalyticsAdmin from './views/Admin/AnalyticsAdmin';
import Banned from './views/Admin/Banned';
import axios from 'axios';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  const usernameUrl = window.location.href.slice(22)

  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      setLoggedIn(true);
    }
  }, [])
  
  const res = async ()=>{
    let formData = new FormData();
    formData.append('username', usernameUrl);
    
    let response = await axios.post('http://localhost/ishare/backend/user/getUser', formData)
      let dataUsername = response.data.username
      setUsername(dataUsername)
  }

  useEffect(()=>{
    res();
  }, [])
  
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
              <View2 />
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

            <Route path='/dashboard'>
              <Overview />
            </Route>

            <Route path='/users'>
              <UsersAction />
            </Route>

            <Route path='/analytics'>
              <AnalyticsAdmin />
            </Route>

            <Route path='/ban'>
              <Banned />
            </Route>

          {/* </UserContext.Provider> */}

          <Route path='*'>
            <Error404 />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;