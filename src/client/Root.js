import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

// Root 컴포넌트는 웹어플리케이션에 BrowserRouter를 적용한다.
// 리덕스를 적용하면 여기서 Provider를 통해 프로젝트에 리덕스를 연결한게 된다.

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
