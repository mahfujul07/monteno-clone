import React from 'react'

const About = () => {
  return (
    <section className="pt-[170px]">
      <div className="flex max-w-[1200px] w-full m-auto">
        <div className="gap-x-6 gap-y-0 flex-wrap mt-0 mr-6 ml-6">
          <div className="flex-auto flex w-[58%]">
            {/* Group Images */}

            <div className="flex items-center h-[670px] w-[670px]">
              <div className="mr-8">
                <div className="w-[270px] h-[320px] rounded-[20px] flex justify-center items-end bg-[#7153d9]">
                  <img src="/assets/items/item-08.png" alt="Monteno" />
                </div>
              </div>
              <div className="">
                <div className="w-[270px] mb-[30px] h-[320px] rounded-[20px] flex justify-center items-end bg-[#4526b1]">
                  <img src="/assets/items/item-09.png" alt="Monteno" />
                </div>
                <div className="w-[270px] h-[320px] rounded-[20px] flex justify-center items-end bg-[#4c22e1]">
                  <img src="/assets/items/item-10.png" alt="Monteno" />
                </div>
              </div>
            </div>

            {/* About section */}

            <div className="flex-auto h-[637px] w-[470px]">
              <div className="relative pt-3 pl-[100px] pr-[17px] w-[500px] h-[670px]">
                <h5 className="flex relative pb-[10px] mt-3 mb-2 text-white font-bold text-[27px]">
                  About Us
                </h5>
                <hr className="text-[#fd562a] bg-[#fd562a] h-1 w-8" />
                <h3 className="text-white text-[48px] font-bold leading-[57.6px] mb-[58px]">
                  Hight Quality NFT Collections
                </h3>
                <p className="text-white text-[18px] leading-[27px] mb-[33px]">
                  Sed ut perspiciatis unde omnis iste natus enim ad minim
                  veniam, quis nostrud exercit
                </p>
                <p className="text-white text-[18px] leading-[27px] mb-[60px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occae
                  cat cupidatat non proident, sunt in culpa qui officia dese
                  runt mollit anim id est laborum velit esse cillum dolore eu
                  fugiat nulla pariatu epteur sint occaecat
                </p>
                <a
                  href="/about"
                  className="bg-[#fd562a] py-[20px] px-[48px] rounded-[33px] z-[1] border-none font-bold border-[#fd562a] text-white transition duration-[0.4s] ease-linear delay-[0s] hover:text-[#fd562a] hover:bg-white hover:border-white"
                >
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About