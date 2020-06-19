import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return ( // Route exact가 없으면 /가 일치하는 /about의 페이지도 같이 보여주게 된다.
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
