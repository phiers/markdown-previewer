import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */


// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <h1>MarkDown Previewer</h1>,
    document.getElementById('app')); //eslint-disable-line
