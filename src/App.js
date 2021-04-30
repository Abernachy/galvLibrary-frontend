import './components/css/App.css';
import Heading from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About'
import Main from './components/Main'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/main">Main</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route> 
            <Route path ="/main">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
