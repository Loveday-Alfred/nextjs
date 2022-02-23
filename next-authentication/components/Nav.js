import Link from "next/link";

function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="/">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signout">
            <a>Sign Out</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
