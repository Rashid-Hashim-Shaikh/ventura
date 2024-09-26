"use client";

import { useEffect, useState } from "react";

export default function IpoListPage() {
  const headerContent = [
    { id: 1, title: "Company/Issue date" },
    { id: 2, title: "Issue size" },
    { id: 3, title: "Price Range" },
    { id: 4, title: "Min Invest/qty" },
  ];

  const RUPEE_SIGN = "&#8377;"

  const [ipoList, setIpoList] = useState(null);

  useEffect(() => {
    // Fetch data from the mock API
    fetch("/api/ipo")
      .then((res) => res.json())
      .then((data) => setIpoList(data));
  }, []);

  if (!ipoList) return <p>Loading...</p>;

  return (
    <div className="w-auto bg-white border border-[#e0dfe7] rounded-2xl mx-10 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 bg-[#F8F8F8]  w-full">
        {headerContent.map((item) => (
          <div
            key={item.id}
            className="text-[#6B6874] text-center first:text-left p-5"
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
          <div className="grid grid-cols-4 border-b  last:border-none" key={id}>
            {/* Icon, company, issue date  */}
            <div className="text-[#6B6874] text-center first:text-left p-5">{company_name}</div>
            {/* Add issue size */}
            <div className="text-center p-5 font-bold"> &#8377; {issue_size} Crores</div>
            {/* Price range */}
            <div className="text-center p-5 font-bold">&#8377; {range}</div>
            {/* min investment/ qty */}
            <div className="flex flex-col text-center p-5">
              <p className="font-bold">&#8377; {min_invest}</p>
              <p className="text-[#6B6874]"><span>{shares} shares</span>/{lot} Lots</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
