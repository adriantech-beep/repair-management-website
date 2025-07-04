import GadgetsTab from "./_components/GadgetsTab";
import Hero from "./_components/Hero";
import ServiceTab from "./_components/ServiceTab";
import OperationsTab from "./_components/OperationsTab";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <ServiceTab />
      <GadgetsTab />
      <OperationsTab />
    </div>
  );
}
