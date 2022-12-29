import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

const Products = () => {
  const [apiresult, setapiresult] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products/");
      const result = await data.json();
      setapiresult(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const resetTitle = (text) => {
    if (text.length > 33) {
      text = text.substring(0, 33);
      return `${text}...`;
    } else {
      return text;
    }
  };

  const handleClick = (element) => {
    dispatch({ type: "add", payload: element });
    dispatch({ type: "calcPrice" });
    toast.success("Added to cart");
  };

  return (
    <>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <div className="products-cont">
            {apiresult.map((ele) => {
              return (
                <div key={ele.id} className="card">
                  <img src={ele.image} alt="product" />
                  <h3 className="title">{resetTitle(ele.title)}</h3>
                  <p className="price">${ele.price}</p>
                  <button
                    className="addcart"
                    onClick={() => {
                      handleClick(ele);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
