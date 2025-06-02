import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-primary-0">Follow Us</p>
        <ul className="flex justify-between">
          <li>
            <FaFacebook className="text-primary-0 font-bold text-2xl" />
          </li>
          <li>
            <FaTwitter className="text-primary-0 font-bold text-2xl" />
          </li>
          <li>
            <FaInstagramSquare className="text-primary-0 font-bold text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
}
