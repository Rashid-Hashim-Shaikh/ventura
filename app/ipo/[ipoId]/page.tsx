"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IPO } from "@/types";
import { formatDateRange, formatDate } from "@/utils/helper";
import arrowIcon from "@/public/assets/icons/arrow.svg";
import downloadIcon from "@/public/assets/icons/download.svg";
import Button from "@/components/ui/Button";
import Stepper from "@/components/Stepper";
import { getCurrentStep } from "@/utils/helper";
import VerticalStepper from "@/components/VerticalStepper";
import useIsMobile from "@/hooks/useIsMobileView";
import Spinner from "@/components/ui/Spinner";

export default function IpoDetailsPage({
  params,
}: {
  params: { ipoId: string };
}) {
  const [ipo, setIpo] = useState<null | Required<IPO>>(null);
  const { ipoId } = params;

  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (ipoId) {
      fetch(`/api/ipo/${ipoId}`)
        .then((res) => res.json())
        .then((data) => setIpo(data))
        .catch((error) => console.error("Error fetching IPO details:", error));
    }
  }, [ipoId]);

  if (!ipo) {
    return <Spinner />;
  }

  const {
    company_desc,
    company_name,
    company_logo,
    issue_size,
    range,
    min_invest,
    issue_date,
    lot,
    listed_price,
    listing_gains,
    listed_on_date,
    allot_final_date,
    bid_start_date,
    bid_end_date,
    refund_init_date,
    demat_transfer_date,
    list_date,
  } = ipo;

  const timelineArray = [
    { id: 1, label: "Bidding starts", value: formatDate(bid_start_date) },
    { id: 2, label: "Bidding ends", value: formatDate(bid_end_date) },
    {
      id: 3,
      label: "Allotment finalization",
      value: formatDate(allot_final_date),
    },
    { id: 4, label: "Refund initiation", value: formatDate(refund_init_date) },
    { id: 5, label: "Demat transfer", value: formatDate(demat_transfer_date) },
    { id: 6, label: "Listing date", value: formatDate(list_date) },
  ];
  // TODO: Handle null values and add color for listing gains
  return (
    <div className="mx-auto max-w-[1280px] space-y-6 pb-10 md:pb-20">
      {/* logo and company name section */}
      <section className="flex justify-between items-center rounded-lg gap-2">
        {/* Company logo and Name */}
        <div className="flex flex-row gap-2">
          {/* Back button  */}
          <div
            className="h-12 w-12 flex justify-center items-center border text-lg mr-2 sm:mr-4 cursor-pointer border-grey rounded-md"
            onClick={() => router.back()}
          >
            <Image src={arrowIcon} alt="back_arrow" />
          </div>
          <img
            className="w-12 h-12 block rounded-full border border-grey"
            src={company_logo}
            alt={company_logo}
          />
          <div>
            {/* for now displaying the first word of company name, usually we get this from API */}
            <h5 className=" font-bold">{company_name.split(" ")[0]}</h5>
            <p>{company_name}</p>
          </div>
        </div>

        {/* Download ICON and apply button */}
        <div className="gap-8 mr-4 hidden sm:flex cursor-pointer">
          <Image
            src={downloadIcon}
            className="w-12 h-12 text-black"
            alt="download"
          />
          <Button type="submit"> Apply Now </Button>
        </div>
      </section>

      {/* Ipo details section */}
      <section className="border border-grey rounded-2xl p-2 md:p-5 ">
        <h6 className="text-md font-bold">IPO Details</h6>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-4">
          {/*  */}
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Issue size</p>
            <p className="font-semibold text-sm">&#8377; {issue_size}</p>
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Price range</p>
            <p className="font-semibold text-sm">&#8377; {range}</p>
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Minimum amount</p>
            <p className="font-semibold text-sm">&#8377; {min_invest}</p>
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Lot size</p>
            <p className="font-semibold text-sm">{lot} Shares</p>
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Issue dates</p>
            {issue_date ? (
              <p className="font-semibold text-sm">
                {formatDateRange(issue_date.start_date, issue_date.end_date)}
              </p>
            ) : (
              <p>To be announced</p>
            )}
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Listed on</p>
            {listed_on_date ? (
              <p className="font-semibold text-sm">
                {formatDate(listed_on_date)}
              </p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Listed price</p>
            <p className="font-semibold text-sm">&#8377; {listed_price}</p>
          </div>

          <div className="p-2">
            <p className="text-neutral text-xs font-semibold">Listing gains</p>
            <p className="font-semibold text-sm">{listing_gains}</p>
          </div>
        </div>
      </section>

      {/* timeline section */}
      <section className="border border-grey rounded-2xl p-2 md:p-5 ">
        <h6 className="text-md font-bold mb-5">IPO Timeline</h6>
        {isMobile ? (
          <VerticalStepper
            steps={timelineArray}
            currentStep={getCurrentStep(timelineArray)}
            // Enable it to check the functionality
            // currentStep={Math.random() * 6 + 1}
          />
        ) : (
          <Stepper
            steps={timelineArray}
            currentStep={getCurrentStep(timelineArray)}
            // Enable it to check the functionality
            // currentStep={Math.random() * 6 + 1}
          />
        )}
      </section>

      {/* description section */}
      <section className="border border-grey rounded-2xl p-2 md:p-5 ">
        <h6 className="text-md font-bold">About the company</h6>
        <p className=" text-neutral leading-tight mt-8 font-normal">
          {company_desc}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          dolorem perspiciatis vero aperiam illum autem, similique omnis tenetur
          quo praesentium ratione optio beatae saepe velit atque harum. Quod,
          nihil nulla. Voluptates aliquid debitis ipsam vel voluptate expedita
          facilis molestias voluptatum libero odit unde magni maxime, fugit
          inventore provident excepturi minima at tempora harum. Recusandae,
          tempora? Aperiam exercitationem corrupti omnis impedit? Sit,
          excepturi. Facere sunt hic deserunt perspiciatis porro optio tenetur,
          eaque explicabo possimus, vero rem nulla assumenda! Dignissimos
          distinctio aliquid reiciendis, ea cum mollitia nam ad aperiam,
          aspernatur eveniet vel. Fuga sed totam suscipit possimus voluptatibus
          nisi dolorum incidunt reiciendis unde ab ad temporibus maiores
          placeat, animi aliquam. Expedita, provident dolore eius deleniti a
          tempora possimus dignissimos harum quod maxime! Quas magni mollitia
          voluptatum sint quod voluptate perferendis laudantium dolorem facilis
          laborum, non, ratione accusantium tenetur aliquid qui dolores in,
          maxime quo dolore. Placeat unde vel nemo dolorem pariatur nulla!
          Soluta iste cupiditate sapiente architecto, expedita consectetur
          possimus voluptate excepturi, voluptatem ipsum consequatur tempora
          blanditiis mollitia enim quod non, omnis maxime eos quia hic quis
          impedit officia? Eveniet, asperiores sunt? Consectetur cupiditate
          consequatur quis sunt maxime. Maxime obcaecati ratione iusto sed nisi
          laboriosam distinctio consequatur molestias? Eius, tempora deleniti
          inventore hic dolore sint repudiandae ab nobis quo praesentium beatae
          eaque? Maiores perspiciatis nulla vero cumque itaque facilis sunt
          placeat, inventore fugiat cum, et obcaecati. Voluptatem sed ipsum
          soluta beatae voluptates facere modi dolore sunt laudantium labore
          fuga, quisquam explicabo dicta? Id exercitationem vitae vero
          doloremque culpa aperiam quia nulla veniam inventore facilis! Sequi,
          consequatur inventore. Adipisci nisi, ex atque, ab optio aspernatur,
          corrupti fugiat magni harum nemo nihil eligendi nobis! Ad soluta quasi
          nemo unde harum excepturi nobis officiis enim ab cupiditate deleniti
          quidem, ullam, recusandae, eveniet tempora facilis earum quos minus!
          Fuga animi quasi eveniet est aliquid, enim temporibus?
        </p>
      </section>
    </div>
  );
}
