import React from "react";
import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      review {reviewId} for product {productId}
    </div>
  );
};

export default productId;
