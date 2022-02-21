import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1 className="text-center">Home page</h1>
      <button onClick={() => router.push("/products")}>Place Order</button>
    </>
  );
}
