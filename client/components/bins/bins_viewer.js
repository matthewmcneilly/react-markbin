import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {
    // generates a string of html from the saved markdown
    const rawHTML = markdown.toHTML(this.props.bin.content);

    // dangerously because it opens app up to cross site scripting
    // however it says this is html display it nicely
    // {rawHTML} would just be a string of html
    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    ); 
  }
}

export default BinsViewer;
