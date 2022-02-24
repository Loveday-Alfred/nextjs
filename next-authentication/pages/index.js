import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <h1 className="text-center">
        {session ? `${session.user.name},` : ""} Welcome to the Home page
      </h1>
    </>
  );
}
