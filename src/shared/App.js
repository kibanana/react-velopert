import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from '../pages';
import Menu from '../components/Menu';
import SplitTest from '../components/SplitTest';
// import notify from '../lib/notify'; // 1)

class App extends Component {
  state = {
    SplitTest: null,
  };
  // 1) 코드 스플리팅 전
  // handleClick = () => {
  //   notify();
  // };

  // 2) 코드 스플리팅 후
  handleClick = () => {
    import('../lib/notify')
      .then(({ default: notify }) => {
        notify();
      });
    
    import('../components/SplitTest')
      .then(({ default: SplitTest }) => {
        this.setState({
          SplitTest
        });
      });
  }

  render() {
    const { SplitTest } = this.state;
    return ( // Route exact가 없으면 /가 일치하는 /about의 페이지도 같이 보여주게 된다.
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
        <button onClick={this.handleClick}>Click Me!</button>
        {SplitTest && <SplitTest /> /* SplitTest가 유효할 때에만 렌더링 */}
      </div>
    );
  }
}

export default App;
