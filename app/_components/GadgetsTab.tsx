import iphone from "@/public/gadget-images/iphone.png";
import ipad from "@/public/gadget-images/ipad.png";
import androidphone from "@/public/gadget-images/androidphone.png";
import androidtablet from "@/public/gadget-images/androidtablet.png";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const gadgetMenu = [
  {
    name: "IPhone",
    description: "Cracked screens,water damage,battery problems, and more",
    image: iphone,
  },
  {
    name: "IPad",
    description: "Cracked screens,battey problems,and software issues",
    image: ipad,
  },
  {
    name: "Android",
    description: "We can do complex repairs like motherboard replacements",
    image: androidphone,
  },
  {
    name: "Tablet",
    description: "Fast and cost-effective solutions for all kinds of tablets",
    image: androidtablet,
  },
];

export default function GadgetsTab() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 font-bold">
      <p className={`${lato.className} font-bold text-[40px] text-accent-300`}>
        All kind of repairs. For real.
      </p>
      <ul className=" flex items-center justify-center gap-8 mt-8">
        {gadgetMenu.map((menu) => (
          <li
            key={menu.name}
            className="w-[220px] h-[276px] bg-primary-0 p-4 flex flex-col gap-6 rounded-2xl shadow-lg"
          >
            <div className="w-[92px] h-[80px] relative">
              <Image
                fill
                src={menu.image}
                alt="A sample image of gadget device"
              />
            </div>
            <div className="w-[155px] h-[96px]">
              <p
                className={`${poppins.className} text-[20px] font-bold text-accent-700`}
              >
                {menu.name}
              </p>
              <p className={`${lato.className} font-light text-accent-200`}>
                {menu.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
