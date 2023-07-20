import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (id)
      fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((product) => setProduct(product));
  }, [id]);

  return (
    <section>
      <h1>Producto llamado: {product?.name} </h1>
    </section>
  );
};

export default ProductItem;
