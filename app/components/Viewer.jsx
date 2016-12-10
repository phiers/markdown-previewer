import React from 'react';
 // eslint-disable-line

export default class Viewer extends React.Component {
  render() {
    return (
      <div className="viewer">
        <h2>Viewer</h2>
        <p>{ this.props.markdown() }</p>
      </div>
    );
  }
}

Viewer.propTypes = {
  markdown: React.PropTypes.func,
};
