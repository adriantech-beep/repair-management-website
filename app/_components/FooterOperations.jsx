import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function FooterOperations() {
  return (
    <div>
      <p>Want to subscribe to our newsletter?</p>
      <p>Contact Us</p>
      <p>Subscribe</p>
      <label htmlFor="email"></label>
      {/* <input id="email" /> */}
      <p>Follow Us</p>
      <div>
        <FaFacebook />
        <FaTwitter />
        <FaInstagramSquare />
      </div>
    </div>
  );
}
