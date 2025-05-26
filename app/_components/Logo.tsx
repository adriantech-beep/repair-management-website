"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCompanySettings } from "@/app/_lib/data-service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Logo() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getCompanySettings();
      setImage(data.company_logo);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-[76px]">
      {loading ? (
        <div className="w-full">
          <Skeleton height={100} width={100} style={{ borderRadius: "50%" }} />
        </div>
      ) : (
        <Image
          src={image}
          alt="Company logo"
          width={100}
          height={100}
          className="object-cover"
        />
      )}
    </div>
  );
}
