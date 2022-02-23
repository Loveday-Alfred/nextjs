import React from "react";
import { getSession, useSession } from "next-auth/client";

const index = ({ data }) => {
  const [session] = useSession();
  return (
    <>
      <h1 className="text-center">Blog page - {data}</h1>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
