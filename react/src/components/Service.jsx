import React from "react";
import IconPbm from "../../../public/images/Icon-PBM.svg";
import IconDrg from "../../../public/images/Icon-DRG.svg";
import IconEmrHover from "../../../public/images/Icon-EMR-Hover.svg";
import IconIddk from "../../../public/images/Icon-IDDK.svg";
import IconMedical from "../../../public/images/Icon-Medical Coding.svg";
import Card from "./Card";

export default function Service() {
const CARD_DETAILS = {
    ["Pbm"]: {
        img: IconPbm,
        title: "NANO PBM",
        description: "Pharmacy Benefits Management",
    },
    ["Drg"]: {
        img: IconDrg,
        title: "NANO DRG",
        description: "Diagnosis Related Group Assignment",
    },
    ["EmrHover"]: {
        img: IconEmrHover,
        title: "NANO EMR",
        description: "Electronic Medical Records",
    },
    ["Iddk"]: {
        img: IconIddk,
        title: "NANO IDDK",
        description: "International Drug Data Knowledge",
    },
    ["Medical"]: {
        img: IconMedical,
        title: "NANO MED",
        description: "Medical Coding Rules",
    },
};
    return (
        <div
            className="text-center w-full flex items-center content-center justify-center flex-col mt-20"
            style={{ backgroundColor: "#F2F7FA" }}
        >
            <div className="container justify-center flex-col w-5/12 my-14">
                <p
                    className="py-3 lg:text-sm md:text-xs xs:text-xs uppercase rounded-md mx-auto w-2/5"
                    style={{ backgroundColor: "#D1F7FC", color: "#2EB9CC" }}
                >
                    DIGITAL HEALTHCARE SOLUTIONS FOR
                </p>
                <div className="lg:text-4xl md:text-2xl xs:text-lg mt-4 flex flex-col content-center items-center">
                    <h1 style={{ color: "#16375B" }}>
                        Healthcare Service Providers
                    </h1>
                    <div className="divider my-4 w-2/12 h-1 rounded-lg"></div>
                </div>
                <p className="lg:text-lg md:text-base xs:text-sm">
                    Remodeling the patient experience while encouraging
                    efficiencies. Unifies integration and data control into a
                    unique platform to connect data from diverse operations,
                    applications and data sources across the entire care
                    network.
                </p>
            </div>
            <div className="flex justify-center items-scratch content-center md:w-8/12 lg:flex-nowrap xs:flex-wrap mb-20 ">
                {Object.keys(CARD_DETAILS).map((key) => (
                    <Card key={key} details={CARD_DETAILS[key]} />
                ))}
            </div>
        </div>
    );
}
