import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
  
  const query = queryString.parse(location.search);
  const detail = query.detail === String(true);

  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && 'What is the detail? There\'s not here!'}
    </div>
  );
};

export default About;
