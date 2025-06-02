import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import { Poppins } from "next/font/google";
import Button from "./Button";
import Input from "./Input";
import FormRow from "./FormRow";
import Heading from "./Heading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center mt-8">
      <Heading type="h2">Contact Us</Heading>
      <p className={`${poppins.className} font-medium text-primary-800`}>
        Any question or remarks? Just write us a message!
      </p>
      <div className="w-[1009px] h-[562px] px-4 py-4 bg-primary-0 flex gap-4 mt-4">
        <div className="w-[414px] max-h-[545px] bg-accent-200 flex flex-col justify-between py-8 px-10 rounded-lg">
          <div className="flex flex-col gap-4">
            <h2 className={`${poppins.className} text-3xl text-primary-0`}>
              Contact information
            </h2>
            <p className="text-primary-0 ">
              Say something to start a live chat!
            </p>
          </div>
          <div className="w-[284px] h-[164px] flex flex-col justify-between">
            <p className="text-primary-0 flex items-center gap-4">
              <FaPhoneVolume />
              +12345678
            </p>
            <p className="text-primary-0  flex items-center gap-4">
              <IoMail />
              example@gmail.com
            </p>
            <p className="text-primary-0 flex items-center gap-4">
              <FaLocationDot />
              123 Example City Philippines
            </p>
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
        <form className="w-[595px] max-h-[545px] flex flex-col items-center justify-between">
          <div className="flex justify-between w-full">
            <FormRow label="First Name">
              <Input id="first_name" />
            </FormRow>
            <FormRow label="Last Name">
              <Input id="last_name" />
            </FormRow>
          </div>

          <div className="flex justify-between w-full">
            <FormRow label="Email Address">
              <Input id="email" />
            </FormRow>
            <FormRow label="Phone Number">
              <Input id="phone_number" />
            </FormRow>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex flex-wrap-reverse">
              <label>General Inquiry</label>
              <input type="checkbox" />
            </div>

            <label>General Inquiry</label>
            <input type="checkbox" />
            <label>General Inquiry</label>

            <input type="checkbox" />
            <label>General Inquiry</label>
          </div>

          <Button type="primary">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
