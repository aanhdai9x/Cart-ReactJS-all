import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Web Shop</Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/colorPicker">Color Picker</Link>
            </li>
            <li>
              <Link to="/manageCart">Manage Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;