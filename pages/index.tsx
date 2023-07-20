import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <h1>Aloja World!</h1>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
