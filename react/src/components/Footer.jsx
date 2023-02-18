import React from "react";
import Logomain from "../../../public/images/Logo-main.svg";
import LinkedIn from "../../../public/images/icon-sm-linkIn.svg";
import GIcon from "../../../public/images/icon-sm-G+.svg";
import Insta from "../../../public/images/icon-sm-Insta.svg";
import Twitter from "../../../public/images/icon-sm-twitter.svg";
import Fb from "../../../public/images/icon-sm-fb.svg";

export default function Footer() {
    return (
        <div className="w-full">
            <div className="container justify-center w-3/5 mx-auto flex items-start content-center justify-center md:flex-row xs:flex-col my-10 lg:flex-nowrap xs:flex-wrap ">
                <ul className="w-2/4 mx-4 my-5">
                    <div>
                        <img src={Logomain} alt="" />
                    </div>
                    <div className="my-8 xl:text-base md:text-sm xs:text-xs blue-header">
                        <p>
                            An autonomous global healthcare technology
                            corporation that intensely converges on developing
                            data-driven analytics, accelerates innovation and
                            advances healthcare transformation.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <img src={Fb} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Insta} alt="" />
                        <img src={GIcon} alt="" />
                        <img src={LinkedIn} alt="" />
                    </div>
                </ul>
                <ul className="w-1/4 mx-4 ">
                    <h1 className="font-bold lg:text-2xl md:text-xl xs:text-base text-blue-800">
                        Contact Us
                    </h1>
                    <div className="bg-teal-500 my-4 h-1 w-10 rounded-lg"></div>
                    <div className="my-8 lg:text-base md:text-sm xs:text-xs blue-header">
                        <p className="font-bold mb-2 ">Head Office:</p>
                        <p>
                            312, Airport Building, Port Saeed Street, Deira,
                            Dubai, United Arab Emirates
                        </p>
                        <p className="my-4">+971 (04) 2896 454</p>
                        <p>sales@nanohealthsuite.com</p>
                    </div>
                </ul>
                <ul className="w-1/4 mx-4 lg:text-2xl md:text-xl xs:text-base">
                    <h1 className="font-bold text-blue-800">Quick Links</h1>
                    <div className="bg-teal-500 my-4 h-1 w-10 rounded-lg"></div>
                    <div className="lg:text-sm md:text-xs xs:text-xs	my-8 blue-header">
                        <p className="mb-4">About NANO Health Suite</p>
                        <p className="my-8">Terms & Conditions</p>
                        <p className="my-8">Privacy Policy</p>
                        <p className="my-8">Support</p>
                    </div>
                </ul>
            </div>
            <div
                className="text-center lg:text-sm md:text-xs xs:text-xs my-3"
                /*   */
            >
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="text-cyan-500">Privacy Policy</span> and{" "}
                <span className="text-cyan-500">Terms of Service</span> Terms of
                Service apply.
            </div>
            <div className="text-white text-center lg:text-sm md:text-xs xs:text-xs py-4 bg-blue-600">
                &#169; Copyright 2021 Nano Health Suite. All Rights Reserved.
            </div>
        </div>
    );
}
