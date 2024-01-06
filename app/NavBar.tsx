import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NAV_LINKS = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];

export default function NavBar() {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
