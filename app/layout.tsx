import { ReactNode } from "react";
import "@/app/globals.css";
import Header from "./_components/Header";
import { Lato } from "next/font/google";

interface RootLayoutProps {
  children: ReactNode;
}
// const lato = Lato({
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata = {
  title: {
    template: "%s / Repair Service",
    default: "Welcome / The Repair Service",
  },
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia totam exercitationem ullam distinctio a ipsum officia aperiam error alias!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-full">
        <Header />
        <div className="bg-primary-100">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
