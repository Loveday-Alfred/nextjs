import Posts from "../../components/posts/post";

export default function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
