import { useEffect, useState } from "react";

export default function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  async function fetchDashboardData() {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    setDashboardData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <h1>Post - {dashboardData.post}</h1>
        <h1>Likes - {dashboardData.likes}</h1>
        <h1>Followers - {dashboardData.followers}</h1>
        <h1>Following - {dashboardData.following}</h1>
      </div>
    </>
  );
}
