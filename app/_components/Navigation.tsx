import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="w-[442px] flex justify-between">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>{" "}
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Contact us
          </Link>
        </li>{" "}
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
