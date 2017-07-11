import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
// executes all the code in the path
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  // when bin content changed save it to the bin
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  // value - load saved content
  // onChange - when content changed save it
  render() {
    return(
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinsEditor;
