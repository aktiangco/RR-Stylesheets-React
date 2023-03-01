import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './components/Example'
import SideBar from './components/SideBar'
import Posts from './components/Posts'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Example />
    <SideBar />
    <Posts />
  </React.StrictMode>,
  document.getElementById('root')
);