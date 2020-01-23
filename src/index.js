import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

function Navigation () {
    return(
        <div>
            <div>
                <a href='#'>About Me</a>
                <a href='#'>Projects</a>
                <a href='#'>Blogs</a>
                <a href='#'>Resume</a>
            </div>
        </div>
    )
}


  ReactDOM.render(
      <App />,
      document.getElementById('root')
  );