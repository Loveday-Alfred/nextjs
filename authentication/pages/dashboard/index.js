import { signIn, getSession } from "next-auth/client";
import React, { useEffect, useState } from "react";

const index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center">Dashboard</h1>
    </>
  );
};

export default index;
