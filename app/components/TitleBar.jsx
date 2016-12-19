import React from 'react';

const TitleBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <p className="menu-text">Markdown Previewer for GFM
        <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/" rel="noopener noreferrer" target="_blank">  (more info)</a>
      </p>
    </div>
    <div className="top-bar-right">
      <p className="menu-text">View source code on
        <a href="https://github.com/phiers/markdown-previewer" rel="noopener noreferrer" target="_blank"> GitHub</a>
      </p>
    </div>
  </div>
);

export default TitleBar;
