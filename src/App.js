import React from "react";
import PropTypes from "prop-types";
// component => HTML 을 반환하는 함수

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      {/* image element 는 alt prop 이 반드시 필요 */}
      <img src={image} alt={name} />
      <h4>rating: {rating}</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0%2F%3Ffname%3Dhttps%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F80f442b593b14aebb8af3d5a0e709aa6.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F201412%2F21%2Fhtm_20141221114418c010c011.jpg&f=1&nofb=1",
    rating: 4.9
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
        // key 는 Food component 에서 사용되지 않고, react 내부에서만 사용
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
