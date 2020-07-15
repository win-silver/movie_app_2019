import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
      "https://www.koreanbapsang.com/wp-content/uploads/2013/10/DSC_2192-150x150.jpg",
    rating: 2.3
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: 
      "https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg",
    rating: 4.8
  }
];

function Food({ name, picture, rating }){
  // console.log(props.fav)
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
// -- function component --
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food 
//           key={dish.id} 
//           name={dish.name} 
//           picture={dish.image} 
//           rating={dish.rating}
//       />
//       ))}
//     </div>
//   );
// }

// -- class component --
class App extends React.Component{

  constructor(props) {
    super(props)
    console.log("hello");
  }

  state = {
    count: 0
  }

  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 })); 
  };

  componentDidMount() {
    console.log("component rendered")
  };

  componentDidUpdate() {
    console.log("I just updated")
  };

  render() {
    console.log("I'm rendering")
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
