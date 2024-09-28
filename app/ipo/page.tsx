"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IPO } from "@/types";
import { formatDateRange } from "@/utils/helper";
import Spinner from "@/components/ui/Spinner";

export default function IpoListPage() {
  const headerContent = [
    { id: 1, title: "Company/Issue date" },
    { id: 2, title: "Issue size" },
    { id: 3, title: "Price Range" },
    { id: 4, title: "Min Invest/qty" },
  ];

  const [ipoList, setIpoList] = useState<null | IPO[]>(null);

  useEffect(() => {
    fetch("/api/ipo")
      .then((res) => res.json())
      .then((data) => setIpoList(data));
  }, []);

  if (!ipoList) return <Spinner/>;

  return (
    <div className="max-w-[1280px] mx-auto bg-white border border-grey text-xs sm:text-sm rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 bg-[#F8F8F8]  w-full">
        {headerContent.map((item) => (
          <div
            key={item.id}
            className="text-secondary  text-center first:text-left p-2 lg:p-5"
          >
            {item.title}
          </div>
        ))}
      </div>
      {/* Content */}
      {ipoList.map((ipo: IPO) => {
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
                {/* Company logo */}
                <img
                  className="w-12 h-12 hidden sm:block rounded-full border border-grey"
                  src={company_logo}
                  alt={company_logo}
                />

                <div>
                  <span className="font-bold text-wrap">{company_name}</span>
                  <p className="text-secondary text-[10px] md:text-sm">
                    {issue_date
                      ? formatDateRange(
                          issue_date.start_date,
                          issue_date.end_date
                        )
                      : "To be announced"}
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
              <p className="text-secondary text-[10px] md:text-sm">
                <span>{shares} shares</span>/{lot} Lots
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
