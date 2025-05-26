import FooterOperations from "./FooterOperations";

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
    <footer className="w-full h-[318px] bg-primary-500 flex items-center justify-center">
      <div>
        <ul className="flex">
          {brands.map((brand) => (
            <li
              key={brand.title}
              className="flex flex-col  h-[190px] w-[135px] bg-accent-300"
            >
              <p>{brand.title}</p>
              {brand.brandname.map((list) => (
                <p key={list}>{list}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <FooterOperations />
    </footer>
  );
}
