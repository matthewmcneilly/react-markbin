import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
// blaze is meteors default frontend rendering system (others include react or angular)
import { Blaze } from 'meteor/blaze';

// componentDidMount and componentWillUnmount are typical ways of working with
// 3rd party libraries (Blaze, D3, backbone, legacy jquery etc.)
// react should always be in charge of the DOM

class Accounts extends Component {
  // ran when component renders on the screen
  componentDidMount() {
    // Render the Blaze accounts form then find the div
    // we just rendered in the 'render' method and place
    // the Blaze accounts form in that div

    // this.view is so that we can reference the stuff we have
    // created when we go to clean up after ourselves
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // ran when component is removed from the screen
  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
