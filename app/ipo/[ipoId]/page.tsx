"use client";

import React from "react";
import { useEffect, useState } from "react";
import { IPO } from "@/types";

export default function IpoDetailsPage({
  params,
}: {
  params: { ipoId: string };
}) {
  const [ipo, setIpo] = useState<null | IPO>(null);
  const { ipoId } = params;

  useEffect(() => {
    if (ipoId) {
      fetch(`/api/ipo/${ipoId}`)
        .then((res) => res.json())
        .then((data) => setIpo(data))
        .catch((error) => console.error("Error fetching IPO details:", error));
    }
  }, [ipoId]);

  if (!ipo) {
    return <div>Loading...</div>;
  }

  const { company_desc,company_name,company_logo, issue_size,range, min_invest,issue_date,lot,listed_on_date,list_date,listed_price,listing_gains   } = ipo;
  
  return <div className="container mx-auto space-y-6">
    {/* logo and company name section */}

    <div>company header</div>

    {/* Ipo details section */}
    <section className="border border-grey rounded-2xl p-2 md:p-5 ">
    <h6 className="text-md font-bold" >IPO Details</h6>
    <div className="grid grid-cols-2 sm:grid-cols-4 border border-grey rounded-2xl p-2 mt-4 md:p-5 ">
        {/*  */}
    <div className="p-2">
        <p className="text-neutral">Issue size</p>
        <p className="font-bold">&#8377; {issue_size}</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Price range</p>
        <p className="font-bold">&#8377; {range}</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Minimum amount</p>
        <p className="font-bold">&#8377; {min_invest}</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Lot size</p>
        <p className="font-bold">{lot} Shares</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Issue dates</p>
        <p className="font-bold">{issue_date.start_date + "-" + issue_date.end_date}</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Listed on</p>
        <p className="font-bold">{list_date}</p>
    </div>
    <div className="p-2">
        <p className="text-neutral">Listed price</p>
        <p className="font-bold">&#8377; {issue_size}</p>
    </div>

    <div className="p-2">
        <p className="text-neutral">Listing gains</p>
        <p className="font-bold">{listing_gains}</p>
    </div>


    </div>

    </section>


    {/* timeline section */}
    <section className="border border-grey rounded-2xl p-2 md:p-5 ">

    <h6 className="text-md font-bold" >IPO Timeline</h6>
    <div>

    </div>

    </section>


    {/* description section */}
    <section className="border border-grey rounded-2xl p-2 md:p-5 ">
        <h6 className="text-md font-bold" >About the company</h6>
        <p className=" text-neutral leading-tight mt-8 font-normal">{company_desc} 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem perspiciatis vero aperiam illum autem, similique omnis tenetur quo praesentium ratione optio beatae saepe velit atque harum. Quod, nihil nulla.
        Voluptates aliquid debitis ipsam vel voluptate expedita facilis molestias voluptatum libero odit unde magni maxime, fugit inventore provident excepturi minima at tempora harum. Recusandae, tempora? Aperiam exercitationem corrupti omnis impedit?
        Sit, excepturi. Facere sunt hic deserunt perspiciatis porro optio tenetur, eaque explicabo possimus, vero rem nulla assumenda! Dignissimos distinctio aliquid reiciendis, ea cum mollitia nam ad aperiam, aspernatur eveniet vel.
        Fuga sed totam suscipit possimus voluptatibus nisi dolorum incidunt reiciendis unde ab ad temporibus maiores placeat, animi aliquam. Expedita, provident dolore eius deleniti a tempora possimus dignissimos harum quod maxime!
        Quas magni mollitia voluptatum sint quod voluptate perferendis laudantium dolorem facilis laborum, non, ratione accusantium tenetur aliquid qui dolores in, maxime quo dolore. Placeat unde vel nemo dolorem pariatur nulla!
        Soluta iste cupiditate sapiente architecto, expedita consectetur possimus voluptate excepturi, voluptatem ipsum consequatur tempora blanditiis mollitia enim quod non, omnis maxime eos quia hic quis impedit officia? Eveniet, asperiores sunt?
        Consectetur cupiditate consequatur quis sunt maxime. Maxime obcaecati ratione iusto sed nisi laboriosam distinctio consequatur molestias? Eius, tempora deleniti inventore hic dolore sint repudiandae ab nobis quo praesentium beatae eaque?
        Maiores perspiciatis nulla vero cumque itaque facilis sunt placeat, inventore fugiat cum, et obcaecati. Voluptatem sed ipsum soluta beatae voluptates facere modi dolore sunt laudantium labore fuga, quisquam explicabo dicta?
        Id exercitationem vitae vero doloremque culpa aperiam quia nulla veniam inventore facilis! Sequi, consequatur inventore. Adipisci nisi, ex atque, ab optio aspernatur, corrupti fugiat magni harum nemo nihil eligendi nobis!
        Ad soluta quasi nemo unde harum excepturi nobis officiis enim ab cupiditate deleniti quidem, ullam, recusandae, eveniet tempora facilis earum quos minus! Fuga animi quasi eveniet est aliquid, enim temporibus?</p>
    </section>

  </div>;
} 
