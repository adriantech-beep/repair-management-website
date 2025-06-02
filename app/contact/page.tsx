import ContactForm from "../_components/ContactForm";
import Map from "@/app/_components/Map";
export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <ContactForm />
      <Map />
    </div>
  );
}
