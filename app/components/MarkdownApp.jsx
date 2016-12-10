import React from 'react';
import { markdown } from 'markdown';

/* eslint-disable */
import Editor from 'Editor';
import Viewer from 'Viewer';
import TitleBar from 'TitleBar';
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
    const html = markdown.toHTML(this.state.text, 'Gruber');
    return { __html: html };
  }

  render() {
    return (
      <div className="container">
        <TitleBar />
        <div className="row">
          <div className="small-6 large-6 columns">
            <Editor onEditing={this.handleEdits} />
          </div>
          <div className="small-6 large-6 columns">
            <Viewer markdown={this.handleMarkdown} />
          </div>
        </div>
      </div>
    );
  }
}
