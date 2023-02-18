import React from "react";

export default function Bannner() {
    return (
        <div className="text-center w-full flex items-center content-center justify-center flex-col banner-bg">
            <div className="container justify-center flex-col w-5/12 my-14">
                <div className="lg:text-4xl md:text-2xl xs:text-lg mt-4 flex flex-col content-center items-center ">
                    <h1 className="blue-header">Subscribe Our Newsletter</h1>
                </div>
                <form action="" className="mt-6">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="rounded-l-md py-3 px-2 w-3/4"
                    />
                    <button
                        type="submit"
                        className="rounded-r-md py-3 px-auto text-white w-1/4 lg:text-base md:text-sm xs:text-xs bg-cyan-700"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
