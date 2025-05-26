import GadgetsTab from "./_components/GadgetsTab";
import Hero from "./_components/Hero";
import ServiceTab from "./_components/ServiceTab";
import OperationsTab from "./_components/OperationsTab";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Hero />
      <ServiceTab />
      <GadgetsTab />
      <OperationsTab />
      <Footer />
    </div>
  );
}
