import './Navbar.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink
 } from 'react-router-dom';
 import Main from './main';
 import Gallery from './gallery';
 import Poems from './poems';
 import Single from './Single';
 import Videos from './videos';
function Navbar()
{
   return(
      <Router>
      <nav>
        <ul>
          <li>
            <NavLink 
             className='link'
              exact to="/" 
              activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
               className='link'
              to="/poems" 
              activeClassName="selected">
              Poems
            </NavLink>
          </li>
          <li>
            <NavLink 
               className='link'
              to="/gallery" 
              activeClassName="selected">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
               className='link'
              to="/videos" 
              activeClassName="selected">
              Videos
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/" exact component={() => <Main />} />
          <Route path="/poems" exact component={() => <Poems />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/videos" exact component={() => <Videos />} />
          <Route path="/poems/:id" exact component={Single}/>
          </Switch>
    </Router>
        
   );
}
export default Navbar;