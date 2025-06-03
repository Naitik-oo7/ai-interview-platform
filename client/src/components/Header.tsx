import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <nav>
        <Link href="/" style={{ marginLeft: "1rem" }}>
          Home
        </Link>
        <Link href={"/about"} style={{ marginRight: "1rem" }}>
          About
        </Link>
      </nav>
    </header>
  );
}
