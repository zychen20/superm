import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        const productsWithPersonalApiId = data.map(product => {
          if(product.id === 1) {
            product.price_id = "price_1JYf6tJBmISZFmCk92UpLr3A";
          } else if (product.id === 2) {
            product.price_id = "price_1JYfQdJBmISZFmCkAoGXSgUV";
          } else if (product.id === 3) {
            product.price_id = "price_1JYfR7JBmISZFmCkoTV8GCCm";
          } else if (product.id === 4) {
            product.price_id = "price_1JYfReJBmISZFmCkTcjhzGNF";
          }
          return product;
        });
        console.log(productsWithPersonalApiId);
        setProducts(productsWithPersonalApiId);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
