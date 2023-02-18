import React from "react";

export default function Box({ details }) {
    return (
        <div className="flex w-1/4 content-center items-center justify-center 
        flex-col mx-4 hover:shadow-2xl py-5 rounded-2xl">
            <div className="container justify-center flex-col w-9/12 ">
                <img className="mx-auto w-11" src={details.img} alt="" />
                <h1
                    className="xl:text-xl md:text-lg xs:text-sm text-cyan-600"
                >
                    {details.num}
                </h1>
                <p className="xl:text-lg md:text-base xs:text-xs">
                    {details.description}
                </p>
            </div>
        </div>
    );
}
