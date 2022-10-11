import React from 'react'

const Portfolio = () => {
  return (
    <section className="flex pt-[150px] px-0 pr-[139px] text-white">
      <div className="max-w-[1200px] w-full m-auto">
        <div className="gap-x-6 gap-y-0 flex flex-wrap mt-0 mr-6 ml-6">
          <div className="md:flex-auto md:w-full">
            <div className="relative items-center">
              <h1 className="text-blue-700  text-[240px] tracking-[24px] uppercase absolute z-[-1] left-7 right-0 top-[-40] ml-auto mr-auto text-center">
                <span>Join</span>
              </h1>
              <h5 className="relative inline-block leading-[3.2] mb-3 text-[24px]">
                Join NFT Portfolio
              </h5>
              <h3 className="mb-7 text-[43px] font-bold leading-[1.2]">
                Become a Monteno <br /> Player Now
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio