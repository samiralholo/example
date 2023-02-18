import React from "react";
import ShapeHelp from "../../../public/images/Shape-Help.svg";
export default function Collaborative() {
    return (
        <div className="md:grid grid-cols-2 gap-10 place-content-center items-center w-9/12 mx-auto">
            <div>
                <img src={ShapeHelp} alt="" />
            </div>
            <div className="blue-header">
                <h1 className="xl:text-4xl md:text-xl xs:text-lg font-bold">
                    Collaborative Intelligence for Better Healthcare
                </h1>
                <h6 className="xl:text-xl md:text-lg xs:text-sm my-4">
                    Digital Healthcare Solutions for
                </h6>
                <h1 className="xl:text-2xl md:text-lg xs:text-base font-bold">
                    Government and Healthcare Regulators
                </h1>
                <div className="bg-teal-500 my-4 h-1 w-1/12 rounded-lg"></div>
                <h4 className="xl:text-base md:text-sm xs:text-xs">
                    Supporting government firms to facilitate critical and
                    essential health services. We deliver mission-critical
                    business administration solutions for government-funded
                    healthcare plans that minimize expenses, streamline
                    operations, enhance program support, and develop compliance
                    while implementing automatic, easy-to-use tools and
                    gratifying outcomes for the people and communities they
                    serve.
                </h4>
            </div>
        </div>
    );
}
