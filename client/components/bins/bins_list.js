import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {
  // removes the select bin
  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  // create list for each bin w/ url and id
  renderList() {
    return this.props.bins.map(bin => {
      // es6 template string
      // definies the url used in the Link 
      const url = `/bins/${bin._id}`;

      // fat arrow function used for this.onBinRemove to prevent
      // the function being called when the button is being renderd
      // like you normally would use {this.onBinRemove(bin)}
      return (
        <li className="list-group-item" key={bin._id}>
          <Link to={url}>Bin {bin._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}


// returns published (created and shared) bins as props to bins_list
export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch() };
}, BinsList);
