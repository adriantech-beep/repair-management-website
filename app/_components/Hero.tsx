import HeroImage from "@/public/technician-clearing-circuit-board-disassembled-laptop.jpg";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="w-[950px]  bg-primary-50 flex items-center rounded-lg">
      <section className="w-[474px] flex flex-col justify-between items-center">
        <h1>Fast, affordable and reliable repairs</h1>
        <p>For your mobile devices</p>
        <Button />
      </section>
      <section className="w-[474px] ">
        <Image
          //   fill
          src={HeroImage}
          alt="technician clearing circuit board disassembled laptop"
        />
      </section>
    </div>
  );
}
