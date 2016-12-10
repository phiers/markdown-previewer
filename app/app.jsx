import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import MarkdownApp from 'MarkdownApp';

// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <div>
    <MarkdownApp />
  </div>,
    document.getElementById('app')); //eslint-disable-line
