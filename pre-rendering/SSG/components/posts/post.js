import Link from "next/link";

export default function posts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h1>
                {post.id} {post.title}
              </h1>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}
