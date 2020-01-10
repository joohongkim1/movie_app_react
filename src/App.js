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
    console.log("add");
  };
  minus = () => {
    console.log("minus");
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
