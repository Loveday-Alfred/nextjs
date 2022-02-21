import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Home page</h1>
      <Link href="/users">
        <a>users</a>
      </Link>
      <Link href="/posts">
        <a>posts</a>
      </Link>
    </>
  );
}
