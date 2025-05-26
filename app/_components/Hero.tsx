import HeroImage from "@/public/technician-clearing-circuit-board-disassembled-laptop.jpg";
import Image from "next/image";
import Button from "./Button";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className="w-[950px] h-[400px]  bg-primary-0 flex items-center rounded-lg shadow-lg mt-12">
      <section className="w-[474px] h-full flex items-center justify-center py-12">
        <div className="h-[250PX] w-[373px] flex flex-col items-center justify-between">
          <div className=" flex flex-col">
            <h1
              className={`${lato.className} font-bold text-[40px] text-accent-300 leading-[120%]`}
            >
              Fast, affordable and reliable repairs
            </h1>
            <p
              className={`${lato.className} text-accent-200 text-[20px] font-small`}
            >
              for your mobile devices
            </p>
          </div>
          <div>
            <Button type="secondary">Book a Repair</Button>
          </div>
        </div>
      </section>
      <section className="relative w-[474px] h-full ">
        <Image
          fill
          src={HeroImage}
          alt="technician clearing circuit board disassembled laptop"
        />
      </section>
    </div>
  );
}
