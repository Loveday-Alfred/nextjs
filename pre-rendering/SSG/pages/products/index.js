import Link from "next/link";

export default function productList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <h1>
                {product.id} {product.title} {product.price}{" "}
              </h1>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
