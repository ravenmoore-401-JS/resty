import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>RESTy</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/history">
                <a href="/history">History</a>
              </Link>
            </li>
            <li>
              <Link to="/help">
                <a href="/help">Help</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;
