import React from "react";
// component => HTML 을 반환하는 함수

function Food({ name, image }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0%2F%3Ffname%3Dhttps%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F80f442b593b14aebb8af3d5a0e709aa6.jpg&f=1&nofb=1"
  },
  {
    name: "ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F201412%2F21%2Fhtm_20141221114418c010c011.jpg&f=1&nofb=1"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {/* Food component 에 kimchi 라는 value 로
      prop(property ) name 설정 */}
      {/* <Food fav="kimchi" /> */}
      {/* map 은 function 을 취해서 array 의 각 item 에 function 을 적용한다. */}
      {/* dish 는 object  */}
      {foodILike.map(dish => (
        <Food name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
