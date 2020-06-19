import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  const homeStyle = {
    color: 'green',
    fontSize: '2rem',
  };

  const aboutStyle = {
    color: 'purple',
    fontSize: '2rem',
  };

  const postStyle = {
    color: 'yellow',
    fontSize: '2rem',
  };

  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={homeStyle}>Home</NavLink></li>
        <li><Link to="/about/kyw">About KYW</Link></li>
        <li><Link to="/about/kyw?detail=true">About KYW with detail</Link></li>
        <li><NavLink to="/about" activeStyle={aboutStyle}>About</NavLink></li>
        <li><NavLink to="/posts" activeStyle={postStyle}>Posts</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;