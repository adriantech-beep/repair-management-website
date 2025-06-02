import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function MapLocations() {
  return (
    <div className="w-[360px] h-[full] p-4">
      <h2 className="text-2xl">Our Locations</h2>
      <div className="flex items-center gap-2 mt-2">
        <div className="p-2 bg-accent-400 rounded-md">
          <HiOutlineBuildingOffice2 className="text-3xl text-primary-0" />
        </div>
        <div>
          <p className="text-accent-400">Location</p>
          <p>Description</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="p-2 bg-accent-400 rounded-md">
          <HiOutlineBuildingOffice2 className="text-3xl text-primary-0" />
        </div>
        <div>
          <p className="text-accent-400">Location</p>
          <p>Description</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="p-2 bg-accent-400 rounded-md">
          <HiOutlineBuildingOffice2 className="text-3xl text-primary-0" />
        </div>
        <div>
          <p className="text-accent-400">Location</p>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}
