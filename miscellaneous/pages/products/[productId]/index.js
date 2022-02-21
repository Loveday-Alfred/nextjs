import React from "react";
import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Details about product {productId}</div>;
};

export default productId;
