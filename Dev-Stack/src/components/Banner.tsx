import React from "react";
import Logo1 from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="w-full flex justify-center">
            <div className="w-[1216px] h-[420px] flex items-center">

                {/* Left part */}
                <div className="w-[696px] h-[326.7px] flex flex-col justify-center">

                    <div>
                        <h1 className="text-[40px] leading-[42px] font-bold text-[#0F172A]">
                            Build Your Idea
                        </h1>

                        <h1 className="text-[40px] leading-[42px] font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </h1>
                    </div>

                    <p className="mt-4 w-[620px] text-[14px] leading-[21px] text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        <br />
                        compare them side by side, and put together the stack that fits your
                        <br />
                        next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-7">
                        <button className="w-[116px] h-[40px] rounded-[6px] bg-gradient-to-r from-orange-500 to-pink-500 text-[11px] font-medium text-white">
                            Explore Technologies
                        </button>

                        <button className="w-[116px] h-[40px] rounded-[6px] border border-gray-200 bg-white text-[11px] font-medium text-gray-600">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-[488px] h-[420px] flex items-center justify-end">
                    <div className="w-[350px] h-[350px]">
                        <img
                            src={Logo1}
                            alt="Banner Image"
                            className="w-full h-full object-fill"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;