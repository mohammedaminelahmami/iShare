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

function App() {
  return (
    <Router>
      <div className='parentApp'>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <LoginUser />
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
            <Links />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;