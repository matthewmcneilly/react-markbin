import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
  render() {
    // check if bin is ready (has it been created yet)
    // hold up until then (prevents error)
    if (!this.props.bin) { return <div>Loading...</div>; }

    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    );
  }
}

// props are available to both the container and Component
export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  // ensures if user visits bin they are shared with it is loaded (also added in bins_list)
  // required because we dont know where a user will land 
  Meteor.subscribe('sharedBins');

  // get me the bin with this bindid
  return { bin: Bins.findOne(binId) };
}, BinsMain);
