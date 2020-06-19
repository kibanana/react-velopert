import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from '../pages';

const Posts = ({match}) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li><Link to={`${match.url}/1`} >1</Link></li>
        <li><Link to={`${match.url}/2`} >2</Link></li>
        <li><Link to={`${match.url}/3`} >3</Link></li>
        <li><Link to={`${match.url}/4`} >4</Link></li>
        <li><Link to={`${match.url}/5`} >5</Link></li>
      </ul>
      <Route exact path={match.url} render={ () => (<h3>Please select any post!</h3>) } />
      <Route path={`${match.url}/:id`} component={Post} />
    </div>
  );
};

export default Posts;
