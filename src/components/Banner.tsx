import Logo1 from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="w-full flex justify-center px-6 py-10 lg:py-0">
            <div className="w-full max-w-[1216px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:h-[420px]">

                {/* Left part */}
                <div className="w-full lg:w-[696px] flex flex-col justify-center text-center lg:text-left">

                    <div>
                        <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-tight lg:leading-[42px] font-bold text-[#0F172A]">
                            Build Your Idea
                        </h1>

                        <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-tight lg:leading-[42px] font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </h1>
                    </div>

                    <p className="mt-4 w-full max-w-[620px] mx-auto lg:mx-0 text-[14px] leading-[21px] text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start">
                        <button className="px-5 h-[40px] rounded-[6px] bg-gradient-to-r from-orange-500 to-pink-500 text-[12px] sm:text-[13px] font-medium text-white whitespace-nowrap">
                            Explore Technologies
                        </button>

                        <button className="px-5 h-[40px] rounded-[6px] border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-600 whitespace-nowrap">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-[488px] flex items-center justify-center lg:justify-end">
                    <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]">
                        <img
                            src={Logo1}
                            alt="Banner Image"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;