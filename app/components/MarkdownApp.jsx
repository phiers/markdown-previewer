import React from 'react';

/* eslint-disable */
import Editor from 'Editor';
import Viewer from 'Viewer';
/* eslint-enable */

export default class MarkdownApp extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleEdits = this.handleEdits.bind(this);
    this.handleMarkdown = this.handleMarkdown.bind(this);
  }

  handleEdits(text) {
    this.setState({ text });
  }

  handleMarkdown() {
    const text = this.state.text;
    return text;
  }
  render() {
    return (
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="row">
          <div className="small-6 large-5 columns">
            <Editor onEditing={this.handleEdits} />
          </div>
          <div className="small-6 large-5 columns">
            <Viewer markdown={this.handleMarkdown} />
          </div>
        </div>
      </div>
    );
  }
}
