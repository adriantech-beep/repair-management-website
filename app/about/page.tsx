import { CiBasketball } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { RiMedalLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500"],
});

const rowOne = [
  {
    title: "Realibility",
    descriptions: [
      "We are open as a team and as a product.",
      "We dont put walls up unless it's necessary.",
      "We become better when we share information.",
      "We are open to diversity of opinion,backgrounds,and thoughts",
    ],
    icon: <IoMdBook />,
    className:
      "col-span-3 row-span-3 col-start-1 row-start-3 bg-accent-200 mt-5 bg-primary-100 px-4 py-4 rounded-md",
  },
  {
    title: "Online Access",
    descriptions: [
      ,
      "Life is short.Let's build something meaningful",
      "We play as a team because great teams build great things together",
      "We keep those standars high.",
    ],
    icon: <CiBasketball />,
    className:
      "col-span-3 row-span-3 col-start-1 row-start-6 mt-5 bg-primary-200 px-4 py-4 rounded-md",
  },
];

const rowTwo = [
  {
    title: "Professional Partners",
    descriptions: [
      "We want the best for our customers and ourselves.",
      "We coach people to their best potential",
      "That's why an Arcader is both a teammate and a customer",
    ],
    icon: <RiMedalLine />,
    className:
      "col-span-3 row-span-3 col-start-4 row-start-1  mt-5 px-4 py-4 rounded-md bg-primary-0",
  },
  {
    title: "Fast Service",
    descriptions: [
      "We act like owners.",
      "Let's empower each other.",
      "If we see something that needs change, we lead through it",
    ],
    icon: <RxLightningBolt />,
    className:
      "col-span-3 row-span-3 col-start-4 row-start-4  mt-5 px-4 py-4 rounded-md bg-primary-0",
  },
  {
    title: "Trusted",
    descriptions: [
      "We can be honest and kind.",
      "We can have high standards and be kind.",
      "We can say no and be kind.",
      "Kindness can vary across cultures,upbringings,and languages - but we try our best to be kind.",
    ],
    icon: <FaHandHoldingHeart />,
    className:
      "col-span-3 row-span-3 col-start-4 row-start-7 mt-5 px-4 py-4 rounded-md bg-primary-200",
  },
];

export const metadata = {
  title: "About",
};
export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-6 grid-rows-9 gap-4 w-[720px] h-[791px] ">
        <div className="col-span-3 row-span-2  mt-5">
          <h2
            className={`${inter.className} font-bold text-4xl text-primary-900`}
          >
            Our values
          </h2>
          <p className="text-primary-900">
            What we love and stand for everyday
          </p>
        </div>

        {rowOne.map((row) => (
          <div key={row.title} className={row.className}>
            <p className="text-3xl">{row.icon}</p>
            <p
              className={`${inter.className} font-semibold text-[24px] text-primary-900`}
            >
              {row.title}
            </p>
            {row.descriptions.map((desc) => (
              <li
                key={desc}
                className={`${inter.className} text-primary-800 list-none border-b-1 border-gray-400 text-[13px] py-1`}
              >
                {desc}
              </li>
            ))}
          </div>
        ))}

        <div className="col-span-3 col-start-1 row-start-9 mt-5"></div>

        {rowTwo.map((row) => (
          <div key={row.title} className={row.className}>
            <p className="text-3xl">{row.icon}</p>
            <p
              className={`${inter.className} font-semibold text-[24px] text-primary-900`}
            >
              {row.title}
            </p>
            {row.descriptions.map((desc) => (
              <li
                key={desc}
                className={`${inter.className} text-primary-800 list-none border-b-1 border-gray-400 text-[13px] py-1`}
              >
                {desc}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
