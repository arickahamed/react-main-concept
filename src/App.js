import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Ali", "Akbar", "Bunny", "Kabir"];
  const jobs = ["Teacher", "Writter", "Freelancer", "Photographer"];
  const add = [
    { name: "Potato", price: "$1.88" },
    { name: "Begun", price: "$1.63" },
    { name: "Potol", price: "$1.18" },
    { name: "Korola", price: "$1.37" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "orange" }}>ALHAMDULILLAH</p>
        <Product product={add[1]}></Product>
        <Product product={add[0]}></Product>
        <Product product={add[2]}></Product>
        <Product product={add[3]}></Product>
      </header>
    </div>
  );
}
function Product(props) {
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
