import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems.js";

class Navbar extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Tsrippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, idx) => {
            return (
              <li key={idx}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button> Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
