import { GiStethoscope } from "react-icons/gi";
import { RiLoopRightFill } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";

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
    icon: <GiStethoscope />,
    description:
      "Unsure about the issue with your device? Don't worry, we offer a complimentary diagnosis.",
  },
];

export default function ServiceTab() {
  return (
    <ul className="h-[250px] flex gap-12">
      {serviceMenu.map((service) => (
        <li key={service.name}>
          <div className="w-[280px] h-[250px] flex flex-col items-center justify-center bg-primary-50 p-2">
            <p>{service.icon}</p>
            <p>{service.name}</p>
            <p>{service.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
