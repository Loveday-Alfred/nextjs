import User from "../../components/user/user";

export default function user({ users }) {
  return (
    <>
      <h1 className="text-center">List of users</h1>
      <User users={users} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
