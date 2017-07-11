import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  // click event handler for Create Bin nav button
  onBinClick(event) {
    event.preventDefault();

    // create a new bin
    // 3rd argument is the return of the meteor method (imports/bins.js)
    // programmatic navigation using browserHistory to navigate the user
    // to a newly created bin (callback)
    //react-router has other ways of doing this as well
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }


  // <a> are not used for navigation in react apps as we dont navigate to new pages
  // we just show and hide components
  // react-router links are used instead
  // when link clicked route the user to localhost:3000/
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
