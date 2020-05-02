import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = [
    "Nana",
    "Akbar",
    "Bunny",
    "Kabir",
    "manik",
    "Raifa",
    "Rafan",
    "Faihan",
    "Amir",
  ];

  const jobs = [
    "Teacher",
    "Writter",
    "Freelancer",
    "Singer",
    "Player",
    "Shopkeeper",
    "Photographer",
  ];

  const add = [
    { name: "Potato", price: "$1.88" },
    { name: "Begun", price: "$1.63" },
    { name: "Potol", price: "$1.18" },
    { name: "Korola", price: "$1.37" },
    { name: "Peyaj", price: "$3.37" },
    { name: "Mug Dal", price: "$1.37" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "orange" }}>ALHAMDULILLAH</p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {nayoks.map((hero) => (
            <li>{hero}</li>
          ))}
        </ul>

        <ol>
          {jobs.map((profession) => (
            <li>{profession}</li>
          ))}
        </ol>

        {add.map((element) => (
          <Goods product={element}></Goods>
        ))}

        {/* <ul>
          {add.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>

        <Product product={add[1]}></Product>
        <Product product={add[0]}></Product>
        <Product product={add[2]}></Product>
        <Product product={add[3]}></Product> */}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(12);
  const handeDencrease = () => setCount(count - 1);
  const handelIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handeDencrease}>Increase</button>
      <button onClick={handelIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic Useres : {users.length} </h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Goods(props) {
  const { name, price } = props.product;
  const productStyle = {
    border: "1px solid yellow",
    borderRadius: "5px",
    width: "350px",
    color: "black",
    backgroundColor: "gray",
    margin: "10px",
  };

  return (
    <div style={productStyle}>
      <h3>Name : {name}</h3>
      <p>Price : {price}</p>
    </div>
  );
}

export default App;
