import { CiMobile3 } from "react-icons/ci";
import FooterOperations from "./FooterOperations";
import { Poppins, Lato } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const brands = [
  {
    title: "Popular Brands",
    brandname: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "Realme",
      "Oppo",
      "Huawei",
      "Infinix",
    ],
  },
  {
    title: "Popular Mobiles",
    brandname: [
      "Iphone 15 Pro",
      "Samsung Galaxy S22",
      "OnePlus 12R",
      "Realme C67",
      "Oppo A18",
      "Xiaomi Redmi Note 13",
      "Samsung Galaxy S23",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full h-[318px] bg-primary-950 flex flex-col items-center justify-center mt-12">
      <div className="w-[942px] flex items-center justify-between py-5 border-b-3 border-gray-400">
        <ul className="flex gap-8">
          {brands.map((brand) => (
            <li key={brand.title} className="flex flex-col h-[190px] w-[135px]">
              <p
                className={`${poppins.className} text-[12px] text-primary-0 flex items-center gap-1`}
              >
                <span className="text-2xl">
                  <CiMobile3 />
                </span>
                {brand.title}
              </p>
              {brand.brandname.map((list) => (
                <p
                  key={list}
                  className={`${poppins.className} text-[10px] text-primary-0 mt-2 ml-5 `}
                >
                  {list}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <FooterOperations />
      </div>

      <div
        className={`${lato.className} text-[12px] text-primary-0 flex flex-col items-center mt-4`}
      >
        <p>Copyright © 2005 Ltd. - All Rights Reserved.</p>
        <p>
          Reproduction of material from any pages without permission is strictly
          prohibited.
        </p>
      </div>
    </footer>
  );
}
