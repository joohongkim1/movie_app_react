import React from "react";
import PropTypes from "prop-types";
// component => HTML 을 반환하는 함수

class App extends React.Component {
  // react 는 자동적으로 class component 의 render method 를 실행
  // state 는 object 이며, component 의 data 를 넣을 공간이 있으며, 데이터가 변한다.
  state = {
    count: 0
  };

  add = () => {
    // 직접 state 를 변경하면 안됨.
    // this.state.count = 1;
    // setState 를 호출하면 react 가 state 를 refresh 하고,
    // render function 을 호출한다.
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
