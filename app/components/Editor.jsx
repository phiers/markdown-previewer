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
        <textarea onChange={this.handleTyping} placeholder="Enter markdown here..." autoFocus />
      </div>
    );
  }
}

Editor.propTypes = {
  onEditing: React.PropTypes.func.isRequired,
};
