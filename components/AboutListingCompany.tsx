import React, { useState } from "react";

interface AboutListingCompanyProp {
  description: string;
}
const AboutListingCompany: React.FC<AboutListingCompanyProp> = ({
  description,
}) => {
  const [show, setShow] = useState(false);

  return (
    <section className="border border-grey rounded-2xl p-2 md:p-5 ">
      <h6 className="text-md font-bold">About the company</h6>
      <p className=" text-neutral leading-tight mt-8 block sm:hidden font-normal">
        {show ? description : description.substring(0, 100)}
        {show ? (
          <span
            onClick={() => setShow(false)}
            className="font-bold text-blue-400 cursor-pointer underline"
          >
            {" "}
            Read less
          </span>
        ) : (
          <span
            onClick={() => setShow(true)}
            className="font-bold text-red-400 cursor-pointer underline"
          >
            {" "}
            Read more
          </span>
        )}
      </p>
      <p className=" text-neutral leading-tight mt-8 hidden sm:block font-normal" >{description}</p>
    </section>
  );
};

export default AboutListingCompany;
