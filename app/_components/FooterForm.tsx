"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Component() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-[184px] h-[42px]">
      <h2 className={`${poppins.className} text-[12px] text-primary-0`}>
        Subscribe to our newsletter
      </h2>
      <form className="flex gap-0">
        <input
          type="email"
          placeholder="name@email.com"
          value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-r-none border-r-0 bg-white text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:ring-offset-0"
          required
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
