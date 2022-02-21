import React from "react";
import Link from "next/link";

const index = ({ productId }) => {
  return (
    <>
      <h1>
        <Link href="/products/1">
          <a>product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/products/2">
          <a>product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/products/3">
          <a>product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>
          <a>product {productId}</a>
        </Link>
      </h1>
    </>
  );
};

export default index;
