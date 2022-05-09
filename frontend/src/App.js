import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
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
import { UserContext } from './views/UserContext';
import Appearance from './views/User/Appearance';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

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
          <UserContext.Provider value='Test UseContext'>
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

            {/* View */}
            <Route path='/amine0029'>
              <View />
            </Route>

            {/* Links */}
            <Route path='/links'>
              {!loggedIn&&
                <Home />
              }
              {loggedIn&&
                <Links />
              }
            </Route>

            <Route path='/Appearance'>
              <Appearance />
            </Route>

            <Route path='/loginadmin'>
              <LoginAdmin />
            </Route>
          </UserContext.Provider>

        </Switch>
      </div>
    </Router>
  );
}

export default App;