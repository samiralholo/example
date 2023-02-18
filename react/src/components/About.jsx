import React from 'react'
import Box from './Box';
import IconIns from "../../../public/images/Icon-Ins_claim.svg";
import ClientHeart from "../../../public/images/Icon-client-and-patient-relation.svg";
import B_Clients from "../../../public/images/Icon-B_Clients.svg";
import Experiance from "../../../public/images/Icon-clients.svg";

const BOX_DETAILS = {
    ["Ins_claim"]: {
        img: IconIns,
        num: "20 Million+",
        description: "Insurance Claims Processesd",
    },
    ["ClientHeart"]: {
        img: ClientHeart,
        num: "5 Million+",
        description: "Client and Patient Relationships",
    },
    ["B_Clients"]: {
        img: B_Clients,
        num: "30000+",
        description: "Business Clients Worked With",
    },
    ["Experiance"]: {
        img: Experiance,
        num: "100+",
        description: "Years of Collective Work Experience",
    },
};
export default function About() {
  return (
      <div className="text-center w-full flex items-center content-center justify-center flex-col mt-20">
          <div className="container justify-center flex-col w-5/12 ">
              <p className="py-3 lg:text-sm md:text-xs xs:text-xs uppercase rounded-md mx-auto w-2/5 bg-cyan-100 text-teal-500">
                  who we are
              </p>
              <div className="lg:text-4xl md:text-2xl xs:text-lg mt-4 flex flex-col content-center items-center">
                  <h1 className="blue-header">About the Nano Health</h1>
                  <div className="bg-teal-500 my-4 h-1 w-2/12 rounded-lg"></div>
              </div>
              <p className="lg:text-lg md:text-base xs:text-sm">
                  Nano Health is devising solutions to equip better and
                  innovative, unified healthcare that can help healthcare
                  providers achieve better care by empowering people to make
                  better decisions.
              </p>
          </div>
          <div className="flex justify-center items-scratch content-center w-8/12 lg:flex-nowrap xs:flex-wrap my-14 ">
              {Object.keys(BOX_DETAILS).map((key) => (
                  <Box key={key} details={BOX_DETAILS[key]} />
              ))}
          </div>
      </div>
  );
}
