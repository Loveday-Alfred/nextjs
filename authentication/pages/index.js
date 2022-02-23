import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <h1 className="text-center">
        {session ? `${session.user.name},` : ""} Welcome to the Home page
      </h1>
    </>
  );
}
