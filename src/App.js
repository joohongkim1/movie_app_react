import React from "react";
// component => HTML 을 반환하는 함수

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {/* Food component 에 kimchi 라는 value 로
      prop(property ) name 설정 */}
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="rice" />
    </div>
  );
}

export default App;
