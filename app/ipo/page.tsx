"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function IpoListPage() {
  const headerContent = [
    { id: 1, title: "Company/Issue date" },
    { id: 2, title: "Issue size" },
    { id: 3, title: "Price Range" },
    { id: 4, title: "Min Invest/qty" },
  ];

  const [ipoList, setIpoList] = useState(null);

  useEffect(() => {
    fetch("/api/ipo")
      .then((res) => res.json())
      .then((data) => setIpoList(data));
  }, []);

  if (!ipoList) return <p>Loading...</p>;

  return (
    <div className="container mx-auto bg-white border border-[#e0dfe7] text-xs sm:text-sm sm:rounded-2xl  overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 bg-[#F8F8F8]  w-full">
        {headerContent.map((item) => (
          <div
            key={item.id}
            className="text-[#6B6874]  text-center first:text-left p-2 lg:p-5"
          >
            {item.title}
          </div>
        ))}
      </div>
      {/* Content */}
      {ipoList.map((ipo) => {
        const {
          id,
          issue_date,
          issue_size,
          company_name,
          company_logo,
          lot,
          min_invest,
          range,
          shares,
        } = ipo;

        return (
          <Link
            key={id}
            className="grid grid-cols-4 border-b last:border-none"
            href={`/ipo/${id}`}
          >
            {/* Icon, company, issue date  */}
            <div className=" text-center self-center first:text-left p-2 lg:p-5 ">
              <div className="flex items-center gap-2">
                {/* TODO: Fix image for width < 900px */}
                {/* Company logo */}
                <div className="w-12 h-12 hidden md:block md:w-16 md:h-16 relative rounded-full border border-[#d2cece]">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full w-full h-full p-0 lg:p-0.5"
                    src={company_logo}
                    alt={company_name}
                  />
                </div>
                <div>
                  <span className="font-bold text-wrap">{company_name}</span>
                  {/* TODO: Fix date format */}
                  <p className="text-[#6B6874] text-[10px] md:text-sm">
                    {issue_date ? issue_date.start_date : "To be announced"}
                  </p>
                </div>
              </div>
            </div>
            {/*  issue size */}
            <div className="text-center self-center p-2 lg:p-5 font-bold">
              {" "}
              &#8377; {issue_size} Crores
            </div>
            {/* Price range */}
            <div className="text-center self-center p-2 lg:p-5 font-bold">
              &#8377; {range}
            </div>
            {/* min investment/ qty */}
            <div className="flex flex-col text-center self-center p-2 lg:p-5">
              <p className="font-bold">&#8377; {min_invest}</p>
              <p className="text-[#6B6874] text-[10px] md:text-sm">
                <span>{shares} shares</span>/{lot} Lots
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
