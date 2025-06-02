import { ReactNode } from "react";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.className} min-h-full`}>
        <Header />
        <div className="bg-primary-50 ">
          <main className="w-full h-full flex items-center justify-center">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
