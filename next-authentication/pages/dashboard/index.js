import { signIn, getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const index = () => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

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
    <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center">
        {" "}
        {session ? `${session.user.name},` : ""} Welcome to your Dashboard
      </h1>
    </>
  );
};

export default index;
