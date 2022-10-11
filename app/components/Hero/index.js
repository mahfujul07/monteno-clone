import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="p-[85px] w-[1519px] h-[740px]">
      <div className="max-w-[1200px] w-full m-auto">
        <div className="gap-x-6 gap-y-0 flex mt-0 mr-6 ml-6">
          <div className="flex w-[41.6666%]">
            <div className="pr-[15px] h-[570px] w-[500px]">
              <div className="relative pt-6 w-[470px] h-[529px]">
                <h6 className="text-white text-[21px] font-bold leading-[67px] mt-0 ml-0 mb-[6px]">
                  We are Monteno NFT
                </h6>
                <hr className="text-[#fd562a] bg-[#fd562a] h-1 w-8" />
                <h1 className="text-white text-[60px] font-bold leading-[72px] mt-0 ml-0 mb-[26px]">
                  Collect Next Generation NFTs Today
                </h1>
                <p className="text-white text-[24px] font-normal leading-[36px] mt-0 ml-0 mb-[43px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
                <div className="flex text-lg leading-7">
                  <a
                    href="/"
                    className="flex font-semibold rounded-[27px] divide-solid text-xl leading-7 px-11 text-white py-3 border-2 border-[#fd562a] bg-[#fd562a] transition duration-[0.4s] ease-linear delay-[0s] hover:text-[#fd562a] hover:bg-white hover:border-white"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div className="justify-end flex w-[850px] h-[670px] ">
              <div className="flex h-[570px] w-[670px] ml-8 mr-0 relative overflow-hidden list-none p-0 z-[1]">
                <div className="relative w-full h-full z-[1] flex transform box-content">
                  <div className="pl-20 flex-shrink-0 w-full relative transform">
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1]">
                      <Image
                        src="/item-01.png"
                        alt="hero"
                        width={170}
                        height={170}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-02.png"
                        alt="hero"
                        width={137}
                        height={142}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-03.png"
                        alt="hero"
                        width={149}
                        height={141}
                      />
                    </div>
                  </div>
                  <span className="absolute left-0 top-0 pointer-events-none opacity-0 z-[-1000]"></span>
                </div>

                <div className="flex relative w-full h-full z-[1]  transform box-content ml-6">
                  <div className="pr-2 flex-shrink-0 w-full relative transform">
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1]">
                      <Image
                        src="/item-04.png"
                        alt="hero"
                        width={123}
                        height={137}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-05.png"
                        alt="hero"
                        width={159}
                        height={126}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-06.png"
                        alt="hero"
                        width={150}
                        height={148}
                      />
                    </div>
                  </div>
                  <span className="absolute left-0 top-0 pointer-events-none opacity-0 z-[-1000]"></span>
                </div>

                <div className="relative w-full h-full z-[1] flex transform box-content">
                  <div className="pl-0 flex-shrink-0 w-full relative transform">
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1]">
                      <Image
                        src="/item-07.png"
                        alt="hero"
                        width={145}
                        height={127}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-06.png"
                        alt="hero"
                        width={150}
                        height={148}
                      />
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[20px] flex justify-center items-end bg-[#4526b1] mt-7">
                      <Image
                        src="/item-01.png"
                        alt="hero"
                        width={170}
                        height={170}
                      />
                    </div>
                  </div>
                  <span className="absolute left-0 top-0 pointer-events-none opacity-0 z-[-1000]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
