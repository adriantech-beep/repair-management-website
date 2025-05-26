import Button from "./Button";
import { Poppins, Lato } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function OperationsTab() {
  return (
    <div className="w-[949px] h-[276px] bg-primary-0 mt-15 flex flex-col items-center justify-center gap-4 px-8 rounded-3xl shadow-lg">
      <p className={`${poppins.className} font-bold text-3xl text-accent-700`}>
        Get Your Mobile Device Repaired Today!
      </p>
      <p
        className={`${lato.className} text-[20px] font-extralight leading-[120%] text-accent-600`}
      >
        We use only the highest quality parts and offer a wide range of repair
        services, from simple screen replacements to complex motherboard
        repairs. We also offer same-day repairs in most cases!
      </p>
      <Button type="round">Book a repair now</Button>
    </div>
  );
}
