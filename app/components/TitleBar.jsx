import React from 'react';

const TitleBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <p className="menu-text">Markdown Previewer</p>
    </div>
    <div className="top-bar-right">
      <p className="menu-text">View source code on
        <a href="https://github.com/phiers/markdown-previewer" rel="noopener noreferrer" target="_blank"> Github</a>
      </p>
    </div>
  </div>
);

export default TitleBar;