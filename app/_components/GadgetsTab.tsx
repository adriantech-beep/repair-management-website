import iphone from "@/public/gadget-images/iphone.png";
import ipad from "@/public/gadget-images/ipad.png";
import androidphone from "@/public/gadget-images/androidphone.png";
import androidtablet from "@/public/gadget-images/androidtablet.png";
import Image from "next/image";

const gadgetMenu = [
  {
    name: "Iphone",
    description: "Cracked screens,water damage,battery problems, and more",
    image: iphone,
  },
  {
    name: "Ipad",
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
    <div className="flex flex-col">
      <p>All kind of repairs. For real.</p>
      <ul className="bg-primary-500 flex gap-6">
        {gadgetMenu.map((menu) => (
          <li key={menu.name} className="w-[220px] h-[276px]">
            <div className="w-[92px] h-[82px]">
              <Image src={menu.image} alt="A sample image of gadget device" />
            </div>
            <p>{menu.name}</p>
            <p>{menu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
