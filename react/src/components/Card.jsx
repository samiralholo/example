import React from "react";

export default function Card({ details }) {
    return (
        <div
            className="w-2/5 flex items-left content-center justify-center 
        flex-col m-4 p-4 bg-white rounded-2xl text-left hover:bg-cyan-500 hover:text-white hover:items-center hover:text-center"
        >
            <div className="container flex-col w-9/12 pt-2 ">
                <img  src={details.img} alt="" />
                <h1 className="xl:text-xl md:text-lg xs:text-sm text-cyan-600">
                    {details.title}
                </h1>
                <p className="xl:text-lg md:text-base xs:text-xs">
                    {details.description}
                </p>
            </div>
        </div>
    );
}
