"use client";

import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const styles = {
  h1: `${poppins.className} font-bold text-3xl`,
  h2: `${poppins.className} font-bold text-[33px] text-brand-100`,
  h3: `${poppins.className} font-medium text-xl`,
  h4: `${poppins.className} font-normal text-lg`,
  h5: `${poppins.className} font-light text-base`,
  h6: `${poppins.className} font-thin text-sm`,
};

interface HeadingProps {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({ children, type = "h1" }: HeadingProps) {
  const headings = {
    h1: <h1 className={styles.h1}>{children}</h1>,
    h2: <h2 className={styles.h2}>{children}</h2>,
    h3: <h3 className={styles.h3}>{children}</h3>,
    h4: <h4 className={styles.h4}>{children}</h4>,
    h5: <h5 className={styles.h5}>{children}</h5>,
    h6: <h6 className={styles.h6}>{children}</h6>,
  };

  return headings[type] || headings.h1; // Default to h1 if type is undefined
}
