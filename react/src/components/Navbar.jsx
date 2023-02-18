import React from "react";
import Logomain from "../../../public/images/Logo-main.svg";
import IconEnvelope from "../../../public/images/icon-envelope.svg";
import Iconclock from "../../../public/images/icon-clock.svg";
import IconPhone from "../../../public/images/icon-phone-alt.svg";

function Navbar() {
    return (
        <nav className=" h-20 p-1.5">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-3/4 w-3/4"
                            src={Logomain}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <div className="lg:text-sm md:text-xs xs:text-xs flex items-center ml-4">
                            <div className="mr-4 flex">
                                <img className="px-2" src={IconPhone} alt="" />
                                <div>
                                    <div className="font-bold">Call</div>
                                    <p>+971 (04) 2896 454</p>
                                </div>
                            </div>
                            <div className="mr-4 flex">
                                <img className="px-2" src={Iconclock} alt="" />
                                <div>
                                    <div className="font-bold">
                                        Connect with us
                                    </div>

                                    <p>sales@nanohealthsuite.com</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img
                                    className="px-2"
                                    src={IconEnvelope}
                                    alt=""
                                />
                                <div>
                                    <div className="font-bold">Sat-Thu</div>

                                    <p>07:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
