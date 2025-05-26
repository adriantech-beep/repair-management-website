import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], display: "swap" });

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <ul
        className={`${robotoMono.className} w-[442px] flex justify-between font-small text-[12px]`}
      >
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
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-accent-400 transition-colors"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/faqs"
            className="hover:text-accent-400 transition-colors"
          >
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
