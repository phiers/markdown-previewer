import React from 'react';
 // eslint-disable-line

export default class Viewer extends React.Component {
  renderPage() {
    const text = this.props.markdown();
    if (text.__html === '') { //eslint-disable-line
      return { __html: '<p class="placeholder">View results here...</p>' };
    }
    return text;
  }
  render() {
    return (
      <div className="viewer">
        <div className="view-area" dangerouslySetInnerHTML={this.renderPage()} />
      </div>
    );
  }
}

Viewer.propTypes = {
  markdown: React.PropTypes.func,
};
