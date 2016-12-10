import React from 'react';

export default class Editor extends React.Component {
  constructor() {
    super();
    this.handleTyping = this.handleTyping.bind(this);
  }
  handleTyping(evt) {
    this.props.onEditing(evt.target.value);
  }
  render() {
    return (
      <div className="editor">
        <h2>Editor</h2>
        <textarea onChange={this.handleTyping} />
      </div>
    );
  }
}

Editor.propTypes = {
  onEditing: React.PropTypes.func.isRequired,
};
