import React from 'react';
import PropTypes from "prop-types";

// 컴포넌트
function Food({ name, color, rating }) {
  return (
    <div>
      <h3>I love { name }</h3>
      <h4>its color is {color}</h4>
      <p>its rating is {rating}</p>
    </div>
  );
}

// propTypes
// prop 으로 준 값을 제대로 사용하고 있는지 확인할 때 유용하게 사용한다.

Food.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

// 컴포넌트에게 줄 정보
// 나중에 API 나 db 에서 가져온 정보로 대체한다. 
const foodILike = [
  {
    id : 1,
    name : "kimchi",
    color : "red",
    rating : 1
  },
  {
    id : 2,
    name : "chicken",
    color : "yello",
    rating: 99
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food 
          key = {dish.id} 
          name ={dish.name} 
          color = {dish.color} 
          rating ={dish.rating}/>
      ))}
      {console.log(foodILike)}
    </div>
  );
}
 
export default App;