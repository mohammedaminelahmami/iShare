import './App.css';
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home';
import LoginUser from './views/User/LoginUser';
import GetStarted from './views/User/GetStarted';
import Contact from './views/User/Contact';
import Pricing from './views/User/Pricing';
import Themes from './views/User/Themes';
import View3 from './views/User/View3';
import View2 from './views/User/View2';
import View from './views/User/View';
import Links from './views/User/Links';
import LoginAdmin from './views/Admin/LoginAdmin';
import Appearance from './views/User/Appearance';
import Profile from './views/User/Profile';
import Error404 from './components/Error404'
import Overview from './views/Admin/Overview';
import UsersAction from './views/Admin/UsersAction';
import Banned from './views/Admin/Banned';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import ChangePwd from './components/ChangePwd';
// ..
AOS.init();

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState(1);
  const [themeDB, setThemeDB] = useState('');
  
  const usernameUrl = window.location.pathname.split('/')[1];

  const res = async ()=>{
    let formData = new FormData();
    formData.append('username', usernameUrl);
    
    let response = await axios.post('http://localhost/ishare/backend/user/getUser', formData)
    let data = response.data
    setUsername(data.username)
  }

  
  const statusUser = ()=>{
    if(localStorage.getItem('token'))
    {
      setLoggedIn(true);
    }
  }

  const getThemeById = async ()=>
  {
    let formDataGetTheme = new FormData();
    formDataGetTheme.append('username', usernameUrl);
    
    let response = await axios.post('http://localhost/ishare/backend/theme/getThemeById', formDataGetTheme)
    // console.log("response : "+response.data.idTheme)
    setThemeDB(response.data.idTheme)
  }

  useEffect(()=>{
    getThemeById();
  }, [theme])

  useEffect(()=>{
    res();
    statusUser();
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
              {!loggedIn ?
                <LoginUser />
                :
                <Home />
              }
            </Route>

            <Route path='/register'>
              <GetStarted />
            </Route>

            <Route path='/Themes'>
              <Themes getTheme={(e)=>{setTheme(e)}} />
            </Route>

            <Route path='/Pricing'>
              <Pricing />
            </Route>

            <Route path='/Contact'>
              <Contact />
            </Route>

            <Route path={'/'+username}>
              {themeDB===1 ? <View3 /> : (themeDB===2 ? <View2 /> : <View />)}
            </Route>

            <Route path='/links'>
              {!loggedIn&&
                <Home />
              }

              {loggedIn&&
                <Links />
              }
            </Route>

            <Route exact path='/profile'>
              <Profile />
            </Route>

            {/* <Route path='/profile/:username'>
              <Profile />
              <Pinformation />
            </Route>

            <Route path='/profile/pwd'>
              <Profile />
              <ChangePwd />
            </Route> */}

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