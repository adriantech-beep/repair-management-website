import { RiLoopRightFill, RiStethoscopeFill } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const serviceMenu = [
  {
    name: "Trusted Professionals",
    icon: <VscTools />,
    description:
      "Rely on our team of professional technicians. We have a vast network of experts ready to assist you.",
  },
  {
    name: "Quick Turnround",
    icon: <RiLoopRightFill />,
    description:
      "We aim to return your device as swiftly as possible, often completing repairs in 30 minutes or less.",
  },
  {
    name: "Free Diagnostic",
    icon: <RiStethoscopeFill />,
    description:
      "Unsure about the issue with your device? Don't worry, we offer a complimentary diagnosis.",
  },
];

export default function ServiceTab() {
  return (
    <ul className="h-[250px] flex gap-12 mt-12">
      {serviceMenu.map((service) => (
        <li
          key={service.name}
          className="w-[280px] h-[250px] flex flex-col items-center justify-between bg-primary-0 py-8 px-4 rounded-lg shadow-lg"
        >
          <p className="text-5xl text-accent-700">{service.icon}</p>
          <p className={`${poppins.className} font-bold text-accent-700`}>
            {service.name}
          </p>
          <p className=" text-accent-600 font-light leading-[120%]">
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
