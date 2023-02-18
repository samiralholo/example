import React from "react";

function Hero() {
    return (
        <div className="text-center w-full flex items-center content-center justify-center flex-col hero-bg h-screen-90 text-white">
            <div className="container justify-center flex-col w-5/12 ">
                <div className="lg:text-4xl md:text-2xl xs:text-lg">
                    100% Automation in Healthcare Operations and Services Such
                    as Claims, Approvals and More...
                </div>
                <p className="lg:text-xl md:text-lg xs:text-sm mt-6 mb-16">
                    We help deliver better solutions for payers, hospitals,
                    doctors, pharmacies, health plans, governments, employers
                    and the millions of lives they touch.
                </p>
                <form action="/">
                    <button className="py-6 px-16 lg:text-base md:text-sm xs:text-xs uppercase rounded-md blue-btn hover:bg-teal-500">
                        request a demo
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Hero;
