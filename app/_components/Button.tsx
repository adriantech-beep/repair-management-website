"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type: "primary" | "round" | "secondary";
  onClick?: () => void;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});
const base = `${poppins.className} shadow-md text-sm font-semibold bg-brand-100 text-stone-100 tracking-wide  transition-all duration-300 focus:outline-none cursor-pointer focus:ring-offset-2 disabled:cursor-not-allowed`;

const styles = {
  primary: `${base} w-[199px] h-[47px] rounded-md `,
  secondary: `${base} w-[250px] h-[47px] rounded-md `,
  round: `${base} w-[250px] h-[47px] rounded-full`,
};

export default function Button({
  children,
  disabled,
  to,
  type,
  onClick,
}: ButtonProps) {
  if (to) {
    return (
      <Link href={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
