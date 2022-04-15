import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className='parentApp'>

        {/* <nav>
          <Link to='/'><button type='submit' className='p-4 bg-firstColor text-white'>Submit</button></Link>
          <Link to='/profile'><button type='submit' className='p-4 bg-secondColor text-white'>Submit</button></Link>
        </nav> */}

        <Nav />

        <Switch>

          <Route exact path='/'>
            {/* <div> Hello World</div> */}
          </Route>

          <Route path='/profile'>
            {/* <div> Hey Mohammed Amine Lahmami </div> */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;