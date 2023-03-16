import React, {Component} from "react";

// Stateless Functional Component
class NavBar extends Component {
  render() {
    return (
      <nav className="p-5 bg-gray-200">
        <a className="text-xl" href="#">
          Navbar{" "}
          <span className="bg-gray-800 py-2 px-4 rounded-full text-white">
            1
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
