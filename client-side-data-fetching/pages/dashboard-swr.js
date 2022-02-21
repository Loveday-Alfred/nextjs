import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function swr() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading";

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <h1>Post - {data.post}</h1>
        <h1>Likes - {data.likes}</h1>
        <h1>Followers - {data.followers}</h1>
        <h1>Following - {data.following}</h1>
      </div>
    </>
  );
}
