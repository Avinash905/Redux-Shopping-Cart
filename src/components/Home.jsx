import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="home-cont">
        <h2 className="heading">Welcome to the useReducer store</h2>
        <Products />
      </section>
    </>
  );
};

export default Home;
